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
        <v-toolbar-title class="subheading">Attached Files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="pa-5" style="overflow-y: auto; max-height: 700px;">
        <v-row>
          <v-col
            cols="12"
            md="2"
            sm="2"
            xs="2"
            style="width: 100%;"
            v-for="(item , index) in list" :key="index"
          >
            <div @click="handleClick(item)" >
                <div link style="border : 1px solid #4CAE50; height: 120px; cursor: pointer;" class="d-flex justify-center align-center">
                    <v-icon link color="success">mdi-file-document-outline</v-icon>
                </div>
                <div>
                    <center><label style="font-size : 12px; color: #ADB5BD; cursor: pointer;">{{ formatName(item) }}</label></center>
                    <center><label style="font-size : 12px; margin-top : -4px; color: #ADB5BD; cursor: pointer;">{{formatFileSize(item)}} MB</label></center>
                </div>
            </div>
            
          </v-col>

          <div
            style="width: 100%; height: 300px; border : 1px dashed white"
            v-if="list.length == 0"
            class="d-flex justify-center align-center"
          >
            <label>No files to show</label>
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
      if (data.data.files[i].file_type == "file") {
        console.log(data.data.files[i])
        this.list.push(data.data.files[i]);
      }
    }
  },

  methods: {
    close() {
      this.dialog = false;
    },

    formatFileSize(item){
        return (item.file_size / 1024).toFixed(2);
    },

    formatName(item){
        let filename = item.file_original_name;
        let ext = filename.split('.');
        return filename.length < 10 ? filename : filename.slice(0,10) + '...' //+ ext[ext.length-1]
    },

    handleClick(item){
        window.open(item.file_path, "_blank");
    }

  },
};
</script>