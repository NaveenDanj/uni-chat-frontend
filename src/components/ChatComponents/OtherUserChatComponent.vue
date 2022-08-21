<template>
  <div class="mt-2" style="max-width: 50%; min-width: auto">
    <div
      v-if="item.message_type == 'text'"
      class="pa-3 ml-10"
      style="background-color: #383838"
    >
      <p>
        {{ item.message }}
      </p>
    </div>

    <ImageChatComponent
      v-else-if="item.message_type == 'image'"
      belong="other"
      :item="item"
    />

    <FileChatComponent
      v-else-if="item.message_type == 'file' || item.message_type == 'video'"
      belong="other"
      :item="item"
    />

    <div class="mt-2 d-flex">
      <v-avatar size="30px" class="my-auto">
        <img :src="profileImage()" />
      </v-avatar>

      <label class="my-auto ml-2" style="font-size: 12px">{{
        formatDate(item.createdAt)
      }}</label>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ImageChatComponent from "./Types/ImageChatComponent.vue";
import FileChatComponent from "./Types/FileChatComponent.vue";

export default {
  props: ["item"],
  methods: {
    formatDate(date) {
      // if date is today then return time
      if (moment(date).isSame(moment(), "day")) {
        return moment(date).format("h:mm a");
      } else {
        return moment(date).format("MMM DD h:mm a");
      }
    },
    profileImage() {
      return (
        process.env.VUE_APP_SOCKET_URL +
        this.$store.state.chat.chat.activeProfile.user.profile_image
      );
    },
  },
  components: { ImageChatComponent, FileChatComponent },
};
</script>