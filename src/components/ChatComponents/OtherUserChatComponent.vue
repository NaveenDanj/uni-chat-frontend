<template>
  <div class="mt-2" style="max-width: 50%; min-width: auto">
    <div class="pa-3 ml-10" style="background-color: #383838">
      <p>
        {{ item.message }}
      </p>
    </div>

    <div class="mt-2 d-flex">
      <v-avatar size="30px" class="my-auto">
        <img
          :src="profileImage()"
        />
      </v-avatar>

      <label class="my-auto ml-2" style="font-size: 12px">{{
        formatDate(item.createdAt)
      }}</label>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["item"],

  methods: {
    
    formatDate(date) {
      // if date is today then return time
      if (moment(date).isSame(moment(), "day")) {
        return moment(date).format("h:mm a");
      } else {
        return moment(date).format("MMM DD");
      }
    },

    profileImage(){
      return process.env.VUE_APP_SOCKET_URL + this.$store.state.chat.chat.activeProfile.user.profile_image;
    }


  },
};
</script>