<template>
  <div>
    <v-list dense dark color="#262626">
      <v-list-item
        v-for="(item, index) in $store.state.contact.directContacts"
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
  props: ["items"],

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
        this.$store.commit('setChatMessages' , messages.data.messages.reverse());
        console.log(messages);
      }catch(err){
        console.log(err);
      }

    }

  },
};
</script>