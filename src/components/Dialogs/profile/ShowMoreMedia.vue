<template>
  <v-dialog persistent max-width="750" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        class="my-auto"
        color="success"
        text
        style="font-size: 13px"
        >Show all</v-btn
      >
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Media Files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="pa-5" style="overflow-y: auto; height: auto">
        <v-row>
          <v-col
            v-for="(item, index) in list"
            :key="index"
            cols="12"
            md="4"
            sm="4"
            xs="4"
            style="width: 100%; max-height: 700px"
          >
            <div>
              <div v-if="item.file_type == 'image'">
                <img :src="item.file_path" style="width: 100%; height: 150px" />
              </div>

              <div v-else-if="item.file_type == 'video'">
                <video style="width: 100%; height: 150px" controls>
                  <source :src="item.file_path" />
                </video>
              </div>
            </div>
          </v-col>

          <div
            style="width: 100%; height: 300px"
            v-if="list.length == 0"
            class="d-flex justify-center align-center"
          >
            <label>No media to show</label>
          </div>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import Auth from "../../../Repository/Auth";

export default {
  data() {
    return {
      dialog: false,
      page: 1,
      limit: 10,
      list: [],
    };
  },

  async created() {
    let data = await Auth.getUserMedia(this.page, this.limit);
    console.log(data);

    for (let i = 0; i < data.data.files.length; i++) {
      if (data.data.files[i].file_type != "file") {
        this.list.push(data.data.files[i]);
      }
    }
  },

  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>