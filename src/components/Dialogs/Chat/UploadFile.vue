<template>
  <v-dialog persistent max-width="500" v-model="dialog">

    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" outlined >
        <v-icon color="success">mdi-paperclip</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>

      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Upload Files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text @dragover.prevent @drop.prevent class="pa-5">

        <div @drop="dragFile" @click="handleOpenFileDialog" style=" width: 100%; height: 200px; cursor: pointer; border: 1px dashed white; display: flex; justify-content: center; align-items: center;">
            <h3>{{ selectedFile == null ? 'Drag your files here or click to upload' : selectedFile.name }}</h3>
        </div>

        <input
            ref="fileField"
            style="display: none"
            type="file"
            @change="handleFileAdded"
        />

        <div class="d-flex mt-4">
            <v-text-field
                label="Type a message..."
                hide-details
                style="width: 100%"
                dense
                dark
                outlined
                class="my-auto"
            />

            <div class="d-flex ml-3 my-auto">
                <v-btn style="margin-left : 5px;" color="success">
                    <v-icon>mdi-send</v-icon>
                </v-btn>
            </div>

        </div>
      
      </v-card-text>

      
    </v-card>
  </v-dialog>
</template>

<script>


export default {

  data() {
    return {
      dialog: false,
      selectedFile : null
    };

  },

  methods : {

    async close(){
      this.dialog = false;
    },

    handleFileAdded(e){
        this.selectedFile = e.target.files[0];
    },

    dragFile(e){
        e.preventDefault();
        this.selectedFile = e.dataTransfer.files[0];
    },

    handleOpenFileDialog(){
        this.$refs.fileField.click();
    }

  }

};
</script>