<template>
  <v-dialog persistent max-width="800" style="height : 300px;" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon fab small dark class="menuOptions">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Search Chat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
          {{ error }}
        </v-alert>

        <v-alert
          v-model="successShow"
          class="mb-5"
          dense
          outlined
          type="success"
        >
          {{ success }}
        </v-alert>

        <v-text-field
          label="Search here..."
          outlined
          dense
          class="mt-2"
          append-icon="mdi-magnify"
          v-model="searchString"
          @input="handleSearch"
        />

        <div class="contentMains" ref="scrollSection">
          <div
            v-for="(item, index) in chatList"
            :key="index"
            style="width: 100%"
          >
            <OtherUserChatComponent
              v-if="item.from_user_id != currentUser.id"
              :item="item"
            />

            <CurrentUserChatComponent v-else :item="item" :index="index" />
            
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
  
<script>
import { throws } from "assert";
import Chat from "../../Repository/Chat";
import OtherUserChatComponent from "../ChatComponents/OtherUserChatComponent.vue";
import CurrentUserChatComponent from "../ChatComponents/CurrentUserChatComponent.vue";

export default {
  data() {
    return {
      dialog: false,
      errorShow: false,
      error: "",
      searchString: "",
      successShow: false,
      success: "",
      chatList: [],
    };
  },
  computed: {
    
    directContacts() {
      return this.$store.state.contact.directContacts;
    },

    currentUser() {
      return this.$store.state.currentUser;
    },
  
},
  methods: {

    profile_image(item) {
      return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
    },
    async handleSearch() {
      if (this.searchString != "") {
        try {
          let userId = this.$store.state.chat.chat.activeProfile.user.id;
          let roomId = this.$store.state.chat.chat.activeProfile.room_id;
          let res = await Chat.searchChat(userId, roomId, this.searchString);

          this.chatList = res.data.messages;
        } catch (err) {
          console.log(err);
        }
      } else {
        this.chatList = [];
      }
    },
    close() {
      this.searchString = "";
      this.chatList = [];
      this.dialog = false;
    },
  },
  components: { OtherUserChatComponent, CurrentUserChatComponent },
};
</script>


<style>

.contentMains {
  height: 500px;
  background: url("https://themesbrand.com/doot/layouts/assets/images/bg-pattern/pattern-05.png");
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

</style>