<template>
  <div class="mt-2" style="max-width: 80%; min-width: 20%">
    <div class="pa-3 ml-10" style="background-color: #383838">
      <p>
        {{ item.message }}
      </p>
    </div>

    <div class="mt-2 d-flex">
      <v-avatar size="30px" class="my-auto">
        <img
          src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
        />
      </v-avatar>

      <label class="my-auto ml-2" style="font-size: 12px">{{
        formatDate(item.date)
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
  },
};
</script>