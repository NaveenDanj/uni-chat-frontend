<template>
  <v-list-item @click="handleSetActiveChat" denselink style="font-size: 10px">
    <v-list-item-avatar size="30px">
      <img :src="formatImage(contact)" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ contact.contact_name }}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <!-- <v-btn icon x-small>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

      <v-menu
        style="background-color: #262626"
        dark
        left
        :offset-y="true"
        min-width="170"
        :close-on-click="true"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon x-small v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="showEditDialog = true" link>
            <v-list-item-title class="my-auto">Edit</v-list-item-title>

            <v-list-item-icon class="my-auto">
              <v-icon dark class="white--text" x-small>mdi-pencil</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item @click="showBlockDialog = true" link>
            <v-list-item-title class="my-auto">Block</v-list-item-title>

            <v-list-item-icon class="my-auto">
              <v-icon dark class="white--text" x-small>mdi-cancel</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title class="my-auto">Remove</v-list-item-title>

            <v-list-item-icon class="my-auto">
              <v-icon dark class="white--text" x-small>mdi-trash-can</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <EditContact
            :showDialog="showEditDialog"
            @close="showEditDialog = false"
          />

          <BlockContact
            :showDialog="showBlockDialog"
            @close="showBlockDialog = false"
          />


        </v-list>
      </v-menu>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import Chat from "../../../Repository/Chat";
import EditContact from "../../Dialogs/Contact/EditContact.vue";
import BlockContact from "../../Dialogs/Contact/BlockContact.vue";

export default {
    props: ["contact"],
    methods: {
        formatImage(item) {
            return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
        },
        async handleSetActiveChat() {
            let item = this.contact;
            if (this.$store.state.chat.chat.activeProfile) {
                if (this.$store.state.chat.chat.activeProfile.user.id == item.user.id) {
                    return;
                }
            }
            this.$store.commit("setChatActiveProfile", item);
            this.$store.state.socket.emit("private:join", item);
            this.$store.commit("setChatMessages", []);
            // load the previous messages
            try {
                let messages = await Chat.loadUserChats(item.contact_id, item.room_id, 1);
                let array = messages.data.messages.reverse();
                this.$store.commit("setChatMessages", array);
                let private_ids = [];
                for (let i = 0; i < array.length; i++) {
                    if (array[i].is_read == false &&
                        array[i].to_user_id == this.$store.state.currentUser.id) {
                        private_ids.push(array[i].private_id);
                    }
                }
                this.$store.state.socket.emit("private:readMessage", {
                    messages: private_ids,
                    room_id: item.room_id,
                });
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    components: { EditContact, BlockContact },

    data(){
        return{
            showEditDialog : false,
            showBlockDialog : false
        }
    }
};
</script>