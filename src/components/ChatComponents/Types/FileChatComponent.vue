<template>
  <div
    class="pa-3 ml-10"
    :style="
      belong == 'me'
        ? 'background-color: rgba(53, 75, 60, 0.5)'
        : 'background-color: #383838'
    "
  >
    <!-- <p :style="belong == 'me' ? 'text-align:right' : 'text-align:left' ">
        <img :src="item.message.split('|')[0]" width="300" />
      </p>
      <label :style="belong == 'me' ? 'text-align:right' : 'text-align:left' " v-if="item.message.split('|')[1]">{{item.message.split('|')[1] && item.message.split('|')[1] }}</label> -->

    <div
      style="border: 0.8px solid rgba(60, 175, 80, 0.3); width: 100%"
      class="pa-6 mb-2 d-flex justify-space-between"
    >
      <div class="pa-0 d-flex justify-start my-auto">
        <div class="my-auto">
          <v-icon color="success">mdi-file-document-outline</v-icon>
        </div>

        <div class="my-auto ml-4">
          <label style="color: #9ba2a9; font-size: 13px">{{
            item.message.split("|")[1]
          }}</label
          ><br />
          <label style="color: #9ba2a9; font-size: 13px">{{
            convertKBtoMB(+item.message.split("|")[2])
          }}</label>
        </div>
      </div>

      <div class="my-auto">
        <v-btn x-small icon fab>
          <v-icon @click="handleDownloadFile" style="color: #9ba2a9"
            >mdi-download</v-icon
          >
        </v-btn>
      </div>
    </div>

    <label class="mt-4">{{ item.message.split("|")[3] }}</label>
  </div>
</template>


<script>
export default {
  props: ["item", "belong"],

  methods: {
    convertKBtoMB(size) {
      return (size / 1024).toFixed(2) + "" + " MB";
    },

    handleDownloadFile() {
      window.open(this.item.message.split("|")[0], "_blank");
    },
  },
};
</script>