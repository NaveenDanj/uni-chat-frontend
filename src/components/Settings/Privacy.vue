<template>
  <div>
    <div>
      <div class="my-auto">
        <label>Profile Photo</label><br />
        <!-- select box -->
        <v-select
          :items="[
            { text: 'Public', value: 'Public' },
            { text: 'Private', value: 'Private' },
          ]"
          v-model="profile_photo"
          outlined
          dense
          color="white"
          value="public"
          style="font-size: 12px"
          @input="handleUpdateProfileImagePrivacy"
        ></v-select>
      </div>

      <div class="my-auto">
        <label>Show online</label><br />
        <!-- switch -->
        <v-switch
          @change="handleUpdateShowOnlinePrivacy"
          v-model="show_online"
          color="success"
          style="font-size: 12px"
        ></v-switch>
      </div>

      <div class="my-auto">
        <label>Read receipts</label><br />
        <!-- switch -->
        <v-switch
          @change="handleUpdateReadReceipt"
          v-model="read_receipt"
          color="success"
          style="font-size: 12px"
        ></v-switch>
      </div>

      <!-- <div class="my-auto">
        <label>Groups</label><br />
        <v-select
          :items="[
            { text: 'Everyone', value: 'everyone' },
            { text: 'Nobody', value: 'nobody' },
          ]"
          outlined
          dense
          color="white"
          value="everyone"
          style="font-size: 12px"
          dark
        ></v-select>
      </div> -->
    </div>
  </div>
</template>


<script>
import Auth from "../../Repository/Auth";

export default {

  created(){
    this.profile_photo = this.$store.state.currentUser.profile_image_public == true ? 'Public' : 'Private';
    this.show_online = this.$store.state.currentUser.showOnline;
    this.read_receipt = this.$store.state.currentUser.read_receipt;
  },

  data() {
    return {
      profile_photo: "Public",
      show_online: false,
      read_receipt: false,
    };
  },

  methods: {
    async handleUpdateProfileImagePrivacy() {
      try {
        await Auth.updateProfileImagePrivacy({
          status: this.profile_photo,
        });

        let me = await Auth.getCurrentUser();
        this.$store.commit('setCurrentUser' , me.data.user);

      } catch (err) {
        console.log(err);
      }
    },

    async handleUpdateShowOnlinePrivacy() {
      try {

        await Auth.updateshowOnlinePrivacy({
          status: this.show_online,
        });

        let me = await Auth.getCurrentUser();
        this.$store.commit('setCurrentUser' , me.data.user);

      } catch (err) {
        console.log(err);
      }
    },

    async handleUpdateReadReceipt() {
      try {

        await Auth.updateReadReceiptPrivacy({
          status: this.read_receipt,
        });

        let me = await Auth.getCurrentUser();
        this.$store.commit('setCurrentUser' , me.data.user);

      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>