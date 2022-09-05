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
        <v-form ref="addForm" @submit="editForm">
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
              readonly
              label="Enter User ID"
              v-model="form.contactId"
              outlined
              dense
              class="mt-2"
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
import Contact from '../../../Repository/Contact';

export default {
  props: ["showDialog", "contact"],

  data() {
    return {
      errorShow: false,
      error: "Sample error",

      success: "",
      successShow: false,

      form: {
        contactId: this.contact.user.userId,
        contactName: this.contact.contact_name,
      },
    };
  },

  methods: {
    async close() {
      this.$refs.addForm.reset();
      //   this.dialog = false;
      this.$emit("close");
    },

    async editForm(e) {

      e.preventDefault();

      if (!this.$refs.addForm.validate()) {
        return;
      }

      this.errorShow = false;
      this.error = "";

      this.successShow = false;
      this.success = "";

      try{

        let res = await Contact.updateContact({
            contactId : this.contact.contact_id.toString(),
            contactName : this.form.contactName
        });

        this.successShow = true;
        this.success = "Contact updated successfully!";

        window.location.reload();

      }catch(err){
        this.errorShow = true;
        this.error = err.response.data.error;
      }

    },
  },
};
</script>