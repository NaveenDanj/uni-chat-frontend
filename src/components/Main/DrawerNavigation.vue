<template>
  <v-navigation-drawer
    app
    color="#2E2E2E"
    dark
    v-model="drawer"
    :mini-variant="true"
    permanent
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon color="#4EAC6D">mdi-message-text</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        style="margin-bottom: 10px"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item-icon class="ml-3">
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Profile", icon: "mdi-face-man-profile" },
        { title: "Chat", icon: "mdi-forum" },
        { title: "Contacts", icon: "mdi-contacts" },
        { title: "Calls", icon: "mdi-phone" },
        { title: "Bookmark", icon: "mdi-bookmark-multiple" },
        { title: "Settings", icon: "mdi-cog-outline" },
      ],
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },


};
</script>