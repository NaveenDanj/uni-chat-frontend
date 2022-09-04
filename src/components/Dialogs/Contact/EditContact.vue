<template>
  <v-dialog persistent max-width="500" v-model="showDialog">
    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Edit Contact</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <v-form ref="addForm">
          <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
            {{ error }}
          </v-alert>

          <v-alert
            v-model="successShow"
            class="mb-5"
            dense
            outlined
            type="success"
          >
            {{ success }}
          </v-alert>

          <div>
            <label style="font-weight: bold">User ID</label>
            <v-text-field
              label="Enter User ID"
              v-model="form.contactId"
              outlined
              dense
              class="mt-2"
              :rules="[(v) => !!v || 'User ID is required']"
            />
          </div>

          <div>
            <label style="font-weight: bold">Prefered Name</label>
            <v-text-field
              label="Prefered Name"
              v-model="form.contactName"
              outlined
              dense
              class="mt-2"
              :rules="[(v) => !!v || 'Prefered Name is required']"
            />
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click.stop="close" text>cancel</v-btn>
            <v-btn type="submit" color="success">Create</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
  
  <script>

export default {
  props: ["showDialog"],

  data() {
    return {
      errorShow: false,
      error: "Sample error",

      success: "",
      successShow: false,

      form: {
        contactId: "",
        contactName: "",
      },
    };
  },

  methods: {
    
    async close() {
      this.form.contactId = "";
      this.form.contactName = "";
      this.$refs.addForm.reset();
      //   this.dialog = false;
      this.$emit("close");
    },
  },
};
</script>