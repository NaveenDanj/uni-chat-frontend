<template>
  <div class="main white--text">
    <div class="detailSection">
      <router-view />
    </div>

    <div class="chatSection"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

.detailSection {
  overflow-y: hidden;
  height: 100vh;
  width: 318px;
  background-color: #262626;
}

.detailSection:hover{
  overflow-y: auto;
}

.chatSection {
  min-height: 100vh;
  flex-grow: 1;
  background-color: #2e2e2e;
}
</style>