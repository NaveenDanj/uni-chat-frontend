<template>
  <v-navigation-drawer
    app
    color="#2E2E2E"
    dark
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
        :to="item.link"
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
        { title: "Profile", icon: "mdi-face-man-profile" , link: '/app/profile' },
        { title: "Chat", icon: "mdi-forum" , link: '/app/chat'},
        { title: "Contacts", icon: "mdi-contacts" , link: '/app/contacts' },
        // { title: "Calls", icon: "mdi-phone" , link: '/app/calls' },
        { title: "Bookmark", icon: "mdi-bookmark-multiple" , link: '/app/bookmark' },
        { title: "Settings", icon: "mdi-cog-outline" , link: '/app/settings' },
      ],
    };
  },

};
</script>