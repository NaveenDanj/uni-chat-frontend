<template>
  <v-list-item link class="mt-2">

    <v-list-item-avatar>
      <v-icon color="success">mdi-file-document-outline</v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        <div class="d-flex justify-space-between">
          <label class="my-auto" style="font-size: 13px">
            <span style="color: #9ba2a9">{{ formatName() }}</span
            ><br />
            <span style="color: #9ba2a9">{{ convertKBtoMB() }}</span>
          </label>

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
              <v-list-item @click="handleDownloadFile" link>
                <v-list-item-title class="my-auto">Open</v-list-item-title>

                <v-list-item-icon class="my-auto">
                  <v-icon dark class="white--text" x-small>mdi-link</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item link>
                <v-list-item-title class="my-auto">Remove</v-list-item-title>

                <v-list-item-icon class="my-auto">
                  <v-icon dark class="white--text" x-small>mdi-delete-forever-outline</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-menu>

        </div>
      </v-list-item-title>
    </v-list-item-content>

  </v-list-item>
</template>

<script>
export default {
  props: ["bookmark"],

  data() {
    return {};
  },

  methods: {
    formatName() {
      return this.bookmark.message.split("|")[1];
    },

    convertKBtoMB() {
      return (
        (this.bookmark.message.split("|")[2] / 1024).toFixed(2) + "" + " MB"
      );
    },

    handleDownloadFile() {
      window.open(this.bookmark.message.split("|")[0], "_blank");
    },
  },
};
</script>