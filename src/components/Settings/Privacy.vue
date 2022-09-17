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
      } catch (err) {
        console.log(err);
      }
    },

    async handleUpdateShowOnlinePrivacy() {
      try {
        await Auth.updateshowOnlinePrivacy({
          status: this.show_online,
        });
      } catch (err) {
        console.log(err);
      }
    },

    async handleUpdateReadReceipt() {
      console.log(this.read_receipt)
      try {
        await Auth.updateReadReceiptPrivacy({
          status: this.read_receipt,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>