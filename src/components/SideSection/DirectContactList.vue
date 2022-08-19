<template>
  <div>
    <v-list dense dark color="#262626">
      <v-list-item
        v-for="(item, index) in directContactList"
        :key="index"
        dense
        link
        style="font-size: 10px"
        @click="handleSetActiveChat(item)"
      >
        <v-list-item-avatar size="30px">
          <img :src="propic(item)" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.contact_name }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </div>
</template>

<script>

import Chat from '../../Repository/Chat';

export default {
  props: ["directContactList"],

  created(){
    this.$store.state.socket.on('private:joined' , (payload) => {
      console.log(payload);
    });
  },

  methods: {
    
    propic(item) {
      return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
    },

    async handleSetActiveChat(item){

      if(this.$store.state.chat.chat.activeProfile){
        
        if(this.$store.state.chat.chat.activeProfile.user.id == item.user.id){
          return;
        }

      }

      this.$store.commit('setChatActiveProfile' , item);      
      this.$store.state.socket.emit('private:join' , item);
      this.$store.commit('setChatMessages' , []);

      // load the previous messages
      try{
        let messages = await Chat.loadUserChats(item.contact_id ,  item.room_id , 1);
        let array = messages.data.messages.reverse();
        this.$store.commit('setChatMessages' , array);
        let private_ids = [];
        
        for(let i = 0; i < array.length; i++){

          if(array[i].is_read == false && array[i].to_user_id == this.$store.state.currentUser.id){
            private_ids.push(array[i].private_id);
          }

        }

        this.$store.state.socket.emit('private:readMessage' , {
          messages : private_ids,
          room_id : item.room_id
        });
        

      }catch(err){
        console.log(err);
      }

    }

  },
};
</script>