<template>
  <div class="main white--text overflow-hidden">

    <div class="detailSection">
      <router-view />
    </div>

    <div class="chatSection">
      <ChatSection />
    </div>
  </div>
</template>

<script>
import ChatSection from '../components/ChatFlow/ChatSection.vue';
export default {
    name: "Home",
    components: { ChatSection }
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-y : hidden;
}

.detailSection {
  overflow-y: hidden;
  height: 100vh;
  min-width:300px;
  max-width: 300px;
  background-color: #262626;
}

.detailSection:hover{
  overflow-y: auto;
  min-height: 100vh;
}

.chatSection {
  height: 100vh;
  flex-grow: 1;
  background-color: #2e2e2e;
}

</style>