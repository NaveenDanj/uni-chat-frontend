<template>

  <div>

    <DrawerNavigation />

    <div class="main white--text overflow-hidden">

    <div v-if="showDetailSection" class="detailSection">
      <router-view
        @chatSelect="handleChatSelect"
      />
    </div>

    <div v-if="showChatSection" class="chatSection">
      <ChatSection @backEvent="() => handleShowSection()" />
    </div>
    
  </div>

  </div>


  
</template>

<script>
import ChatSection from "../components/ChatFlow/ChatSection.vue";
import DrawerNavigation from "../components/Main/DrawerNavigation.vue";

export default {
  name: "Home",

  components: { ChatSection , DrawerNavigation },

  data() {
    return {
      showChatSection: true,
      showDetailSection: true
    };
  },

  created() {
    console.log('chat mounted');
    this.$store.state.socket.emit("channel:main:join" , this.$store.state.currentUser);

    this.$store.state.socket.on("channel:main:meJoined", (data) => {
      console.log("you have been connected to the main chat channel!" , data);
    });


    this.$store.state.socket.on('channel:main:userJoined' , (data) => {
      console.log("user joined main channel!" , data);
      this.$store.commit('setContactOnlineStatus' , {
        id : data.userId,
        is_online : 1
      })
    });

    this.$store.state.socket.on('channel:main:userLeft' , (data) => {
      console.log("user left" , data);
      this.$store.commit('setContactOnlineStatus' , {
        id : data.userId,
        is_online : 0
      })
    });

  },

  methods: {

    handleShowSection() {
      this.showChatSection = false;
      this.showDetailSection = true;
    },

    handleChatSelect(id){
      console.log('id', id);

      if(this.$screen.width > 880){
        this.showChatSection = true;
        this.showDetailSection = true;
      }else{
        this.showChatSection = true;
        this.showDetailSection = false;
      }

      // this.showChatSection = true;
      // this.showDetailSection = false;
    }

  },

};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
}

.detailSection {
  overflow-y: hidden;
  height: 100vh;
  min-width: 300px;
  max-width: 300px;
  background-color: #262626;
}

.detailSection:hover {
  overflow-y: auto;
  min-height: 100vh;
}

.chatSection {
  height: 100vh;
  flex-grow: 1;
  background-color: #2e2e2e;
}

@media (max-width: 880px) {


  .detailSection {
    min-width: 100vw;
  }

}
</style>