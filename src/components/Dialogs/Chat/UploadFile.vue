<template>
  <v-dialog persistent max-width="500" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" outlined>
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

        <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
          {{ error }}
        </v-alert>

        <div
          @drop="dragFile"
          @click="handleOpenFileDialog"
          style="
            width: 100%;
            height: 200px;
            cursor: pointer;
            border: 1px dashed white;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <h3>
            {{
              selectedFile == null
                ? "Drag your files here or click to upload"
                : selectedFile.name
            }}
          </h3>
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
            v-model="message"
          />

          <div class="d-flex ml-3 my-auto">
            <v-btn
              type="submit"
              @click="sendMessage"
              style="margin-left: 5px"
              color="success"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </div>
        </div>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import Chat from '../../../Repository/Chat';

export default {
  data() {
    return {
      dialog: false,
      selectedFile: null,

      message : '',

      errorShow : false,
      error : ""

    };
  },

  methods: {
    async close() {
      this.dialog = false;
      this.message = '';
      this.selectedFile = null;

      this.errorShow = false;
      this.error = "";

    },

    handleFileAdded(e) {
      this.selectedFile = e.target.files[0];
    },

    dragFile(e) {
      e.preventDefault();
      this.selectedFile = e.dataTransfer.files[0];
    },

    handleOpenFileDialog() {
      this.$refs.fileField.click();
    },

    async sendMessage() {

      this.errorShow = false;
      this.error = "";

      if(this.selectedFile == null){
        this.errorShow = true;
        this.error = "Please select a file to upload";
        return;
      }

      try{

        let form = new FormData();
        form.append('file', this.selectedFile);

        let res = await Chat.uploadFile(form);
        let _id = Date.now()+'' + this.$store.state.socket.id;

        console.log(res);

        let msg = res.data.file.file_path + "|" + res.data.file.file_original_name + "|" + res.data.file.file_size + "|" + this.message;
        
        this.$store.state.socket.emit("private:sendMessage" , {
          message_type : res.data.file.file_type,
          message: msg,
          user_from: this.$store.state.currentUser,
          user_to: this.$store.state.chat.chat.activeProfile,
          date : new Date(),
          room_id: this.$store.state.chat.chat.activeProfile.room_id,
          private_id : _id
        });

        // // add to store
        this.$store.commit('addChatMessage' , {
          message_type : res.data.file.file_type,
          message: msg,
          user_from: this.$store.state.currentUser,
          user_to: this.$store.state.chat.chat.activeProfile,
          from_user_id : this.$store.state.currentUser.id,
          date : new Date(),
          room_id: this.$store.state.chat.chat.activeProfile.room_id,
          id : _id,
          is_read : false
        });

        this.message = '';
        this.selectedFile = null;

        this.close();

      }catch(err){
        this.errorShow = false;
        this.error = err.response.data.message;
      }

    },
  },
};
</script>