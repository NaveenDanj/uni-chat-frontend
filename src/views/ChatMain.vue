<template>
  <div class="main white--text">
    <div class="detailSection">asd</div>

    <div class="chatSection">asd</div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.detailSection {
  height: 100vh;
  width: 318px;
  background-color: #262626;
}

.chatSection {
  height: 100vh;
  flex-grow: 1;
  background-color: #2e2e2e;
}


</style>