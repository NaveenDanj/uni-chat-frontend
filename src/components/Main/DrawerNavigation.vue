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
      <v-list-item-icon>
        <v-btn icon small fab  class="mx-auto ml-2" @click="handleLogout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-list-item-icon>
    </template>
  </v-navigation-drawer>
</template>

<script>
import Auth from '../../Repository/Auth';

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

  methods : {
    async handleLogout(){

      try{

        await Auth.logout();
        this.$store.commit('setCurrentUser' , null);
        localStorage.removeItem('token');
        this.$router.push('/auth/login');
        
      }catch(err){
        console.log(err);
      }finally{
        localStorage.removeItem('token');
        this.$store.commit('setCurrentUser' , null);
        localStorage.removeItem('token');
        this.$router.push('/auth/login');

      }

    }
  }

};
</script>