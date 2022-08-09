<template>
  <div class="main">
    <div style="width: 100%">
      <div class="header d-flex justify-space-between">
        <div class="d-flex my-auto">
          <div class="my-auto mr-2 backBtn">
            <v-btn @click="() => $emit('backEvent')" icon dark small>
              <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
          </div>

          <v-avatar @click="drawer = true" size="40px" class="my-auto">
            <img
              v-if="activeProfile != null && activeProfile.avatar != 'Icon' "
              src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
            />

            <v-icon class="white--text">mdi-pound</v-icon>

          </v-avatar>

          <div class="my-auto ml-3">
            <label @click="drawer = true">{{ activeProfile != null ? activeProfile.name : '' }}</label><br />
            <label style="font-size: 11px">Online</label>
          </div>
        </div>

        <div class="d-flex my-auto">
          <v-btn icon fab small dark class="menuOptions">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon fab small dark class="menuOptions">
            <v-icon>mdi-information</v-icon>
          </v-btn>

          <v-btn icon fab small dark class="menuOptions">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="contentMain" ref="scrollSection">

        <div v-for="(item , index) in messagesArray" :key="index" style="width : 100%;">

          <OtherUserChatComponent
            v-if="item.userData.id != currentUser.id"
            :item="item"
          />

          

          <div v-else class="mt-2" style="max-width: 80%; min-width: 20%; float: right">
            <div
              class="pa-3 ml-10"
              style="background-color: rgba(53, 75, 60, 0.5)"
            >
              <p>
                {{ item.message }}
              </p>
            </div>

            <div class="d-flex mt-3" style="float: right">
              <!-- read receipt icon -->
              <v-icon small style="color: #4eac6d">mdi-check-circle</v-icon>
              <label style="font-size: 12px" class="ml-2">{{ formatDate(item.meta.date) }}</label>
            </div>
          </div>

        </div>

      </div>

      <div class="footer">
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
          <v-btn @click="handleSendMessage" color="success">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <ProfileDetail :drawer="drawer" @drawClose="drawer = false" />
  </div>
</template>

<script>
import ProfileDetail from "./ProfileDetail.vue";
import moment from "moment";
import OtherUserChatComponent from "../ChatComponents/OtherUserChatComponent.vue";

export default {
  components: { ProfileDetail, OtherUserChatComponent },

  data() {
    return {
      drawer: false,
      message : '',
    };
  },

  updated(){
    this.scrollToElement();
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
    }

  },

  created(){

    this.$store.state.socket.on('channel:main:receiveMessage' , (data) => {

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

    });

  },

  methods : {
    handleSendMessage(){

      if(this.message != ''){
        
        this.$store.state.socket.emit("chennel:main:sendMessage" , {
          message : this.message,
          profile : this.activeProfile,
          meta : {
            date : new Date(),
          },
          userData : this.$store.state.currentUser
        });

        // add to store
        this.$store.commit('addChatMessage' , {
          message : this.message,
          profile : this.activeProfile,
          meta : {
            date : new Date(),
          },
          userData : this.$store.state.currentUser,
          id : Date.now()+'' + this.$store.state.socket.id
        });

        this.message = '';
      }

    },

    formatDate(date){

      // if date is today then return time
      if(moment(date).isSame(moment(), 'day')){
        return moment(date).format('h:mm a');
      }
      else{
        return moment(date).format('MMM DD');
      }

    },

    scrollToElement() {
      const el = this.$refs.scrollSection;
      el.scrollTop = el.scrollHeight;
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