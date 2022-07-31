<template>
  <v-app>
    

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DrawerNavigation from "./components/Main/DrawerNavigation.vue";
export default {
  name: "App",
  components: { DrawerNavigation },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* remove page scrollbar */


</style>