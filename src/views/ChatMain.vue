<template>
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
</template>

<script>
import ChatSection from "../components/ChatFlow/ChatSection.vue";
export default {
  name: "Home",

  components: { ChatSection },

  data() {
    return {
      showChatSection: true,
      showDetailSection: true
    };
  },

  methods: {

    handleShowSection() {
      this.showChatSection = false;
      this.showDetailSection = true;
    },

    handleChatSelect(id){
      console.log('id', id);
      this.showChatSection = true;
      this.showDetailSection = false;
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