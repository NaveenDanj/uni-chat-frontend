<template>
  <div class="main">
    <div style="width: 100%">

      <div v-if="activeProfile != null" class="header d-flex justify-space-between">

        <div class="d-flex my-auto">

          <div class="my-auto mr-2 backBtn">
            <v-btn @click="() => $emit('backEvent')" icon dark small>
              <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
          </div>

          <v-avatar size="40px" class="my-auto">
            <img
              v-if="activeProfile != undefined && activeProfile.user.profile_image != 'Icon' "
              :src="profileImage(activeProfile)"
            />

            <v-icon v-else class="white--text">mdi-pound</v-icon>

          </v-avatar>

          <div class="my-auto ml-3">
            <label >{{ activeProfile != null ? activeProfile.contact_name : '' }}</label><br />
            <label style="font-size: 11px">{{ activeProfileOnlineStatus }}</label>
          </div>
        </div>

        <div class="d-flex my-auto">
          <SearchChatDialog />

          <v-btn @click="drawer = true" icon fab small dark class="menuOptions">
            <v-icon>mdi-information</v-icon>
          </v-btn>

          <v-btn icon fab small dark class="menuOptions">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>

      <div v-if="activeProfile != null" class="contentMain" ref="scrollSection" @scroll="handleScroll">

        <div v-for="(item , index) in $store.state.chat.chat.messages" :key="index" style="width : 100%;">

          <OtherUserChatComponent
            v-if="item.from_user_id != currentUser.id"
            :item="item"
          />

          <CurrentUserChatComponent
            v-else
            :item="item"
            :index="index"
          />

        </div>

      </div>

      <div v-if="activeProfile != null" class="footer">

        <v-text-field
          v-model="message"
          label="Type a message..."
          hide-details
          style="width: 100%"
          dense
          dark
          outlined
          class="my-auto"
          @keydown.enter="handleSendMessage"
          @click="scrollToElement"
        />

        <div class="d-flex ml-3 my-auto">
          <UploadFile />
          <v-btn style="margin-left : 5px;" @click="handleSendMessage" color="success">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </div>

      </div>

      <div v-if="activeProfile == null" class="contentMain" style="height : 100%">

      </div>

    </div>

    <ProfileDetail :drawer="drawer" @drawClose="drawer = false" />
  </div>
</template>

<script>
import ProfileDetail from "./ProfileDetail.vue";
import moment from "moment";
import OtherUserChatComponent from "../ChatComponents/OtherUserChatComponent.vue";
import CurrentUserChatComponent from "../ChatComponents/CurrentUserChatComponent.vue";

import Chat from '../../Repository/Chat';
import UploadFile from "../Dialogs/Chat/UploadFile.vue";
import SearchChatDialog from "../Dialogs/SearchChatDialog.vue";

export default {
  components: { ProfileDetail, OtherUserChatComponent, CurrentUserChatComponent, UploadFile, SearchChatDialog },

  data() {
    return {
      drawer: false,
      message : '',
      currentChatPage : 1,
    };
  },

  updated(){
    const el = this.$refs.scrollSection;
    if(el.scrollTop == 0  && this.currentChatPage == 1){
      this.scrollToElement();
    }else if(el.scrollTop != 0){
      this.scrollToElement();
    }

  },

  computed : {

    activeProfile() {
      return this.$store.state.chat.chat.activeProfile;
    },

    messagesArray () {
      return this.$store.state.chat.chat.messages;
    },

    currentUser(){
      return this.$store.state.currentUser;
    },

    activeProfileOnlineStatus(){
      return this.activeProfile.user.is_online == 0 ? 'Offline' : 'Online'
    }

  },

  watch : {

    activeProfile(newValue){
      if(newValue != null){
        this.currentChatPage = 1;
        this.scrollToElement();
      }
    },

  },

  created(){

    this.$store.state.socket.on('private:receiveMessage' , (data) => {
      let check = false;    
      for(let i = 0; i < this.$store.state.chat.chat.messages.length; i++){
        let msgObj = this.$store.state.chat.chat.messages[i];
        if(msgObj.id == data.id){
          check = true;
          break;
        }
      }

      if(!check){
        this.$store.commit('addChatMessage', data);
      }

      // send read notification
      if(data.from_user_id != this.$store.state.chat.chat.activeProfile.id ){
        this.$store.state.socket.emit('private:readMessage' , {
          messages : [data.private_id],
          room_id : this.activeProfile.room_id
        });
      }

    });

    this.$store.state.socket.on('private:readReceipt' , (payload) => {
      for(let i = 0; i < payload.length; i++){
        console.log('private id is : ' , payload[i]);
        this.$store.commit('setChatRead', payload[i]);
      }

    });

  },

  methods : {

    handleSendMessage(){

      if(this.message != ''){

        let _id = Date.now()+'' + this.$store.state.socket.id;
        
        this.$store.state.socket.emit("private:sendMessage" , {
          message_type : 'text',
          message: this.message,
          user_from: this.$store.state.currentUser,
          user_to: this.activeProfile,
          date : new Date(),
          room_id: this.activeProfile.room_id,
          private_id : _id
        });

        // add to store
        this.$store.commit('addChatMessage' , {
          message_type : 'text',
          message: this.message,
          user_from: this.$store.state.currentUser,
          user_to: this.activeProfile,
          from_user_id : this.$store.state.currentUser.id,
          date : new Date(),
          room_id: this.activeProfile.room_id,
          id : _id,
          is_read : false
        });

        this.message = '';

      }

    },

    formatDate(date){

      if(moment(date).isSame(moment(), 'day')){
        return moment(date).format('h:mm a');
      }
      else{
        return moment(date).format('MMM DD');
      }

    },

    scrollToElement() {
      const el = this.$refs.scrollSection;
      if(el){
        el.scrollTop = el.scrollHeight;
      }
    },

    async loadNextPage(){
      const el = this.$refs.scrollSection;
      if(el.scrollTop == 0){

        try{

          if(this.currentChatPage == 1){
            this.currentChatPage = 2;
          }

          let messages = await Chat.loadUserChats(this.activeProfile.contact_id ,  this.activeProfile.room_id , this.currentChatPage);
          let reversed =  messages.data.messages;
          let private_ids = [];

          for (let i = 0; i < reversed.length; i++) {
            this.$store.commit('prependChatMessage' , reversed[i]);
          }
        
          if (reversed.length > 0){
            this.currentChatPage++;

            for(let i = 0; i < reversed.length; i++){

              if(reversed[i].is_read == false && reversed[i].to_user_id == this.$store.state.currentUser.id){
                private_ids.push(array[i].private_id);
              }

            }

            this.$store.state.socket.emit('private:readMessage' , {
              messages : private_ids,
              room_id : this.activeProfile.room_id
            });

          }

        }catch(err){
          console.log(err);
        }
      }

    },

    handleScroll(){
      const el = this.$refs.scrollSection;
      if(el.scrollTop == 0){
        this.loadNextPage();
      }
    },

    profileImage(item){
      return process.env.VUE_APP_SOCKET_URL + item.user.profile_image
    }

  }

};
</script>


<style>
.main {
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 10vh;
  padding: 10px;
  background-color: rgba(46, 46, 46, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contentMain {
  height: 80vh;
  background: url("https://themesbrand.com/doot/layouts/assets/images/bg-pattern/pattern-05.png");
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  height: 10vh;
  padding: 10px;
  background-color: rgba(46, 46, 46, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.menuOptions {
  margin-left: 10px;
}

@media (min-width: 880px) {
  .backBtn {
    display: none;
  }
}

@media (max-width: 395px) {
  .menuOptions {
    margin-left: 0px;
  }
}
</style>