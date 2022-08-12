<template>
  <v-dialog persistent max-width="500" v-model="dialog">

    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" fab outlined x-small>
        <v-icon color="success">mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>

      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Create Contact</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">

        <v-form ref="addForm" @submit="createContact">

          <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
            {{ error }}
          </v-alert>

          <v-alert v-model="successShow" class="mb-5" dense outlined type="success">
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
              :rules="[
                v => !!v || 'User ID is required',
              ]"
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
              :rules="[
                v => !!v || 'Prefered Name is required',
              ]"
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

import Contact from '../../Repository/Contact';

export default {

  data() {
    return {
      dialog: false,

      errorShow: false,
      error: "Sample error",

      success : '',
      successShow : false,

      form : {
        contactId : "",
        contactName: ""
      }

    };

  },

  methods : {

    async createContact(e) {

      e.preventDefault();
      
      if (!this.$refs.addForm.validate()){
        return;
      }

      this.errorShow = false;
      this.error = "";

      this.successShow = false;
      this.success = "";
      
      try{

        let res = await Contact.createContact(this.form);

        console.log('the res is : ' , res);

        this.form.contactId = "";
        this.form.contactName = "";

        this.success = "Contact created successfully";
        this.successShow = true;
        this.$refs.addForm.reset();
      }catch(err){
        console.log(err);
        this.errorShow = true;
        this.error = err.response.data.error;
      }


    },

    async close(){
      this.form.contactId = "";
      this.form.contactName = "";
      this.$refs.addForm.reset();
      this.dialog = false;
    }

  }

};
</script>