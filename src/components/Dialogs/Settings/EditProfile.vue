<template>
  <v-dialog persistent max-width="500" height="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="my-auto" icon fab x-small>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Edit profile Info</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <v-form ref="editForm" @submit="submitEditForm">
          <div class="d-flex">
            <div class="mr-5">
              <v-avatar style="border-radius: 45px; width: 90px; height: 90px">
                <img :src="proPic()" />
              </v-avatar>
            </div>

            <div style="width: 100%">
              <v-alert
                v-model="errorShow"
                class="mb-5"
                dense
                outlined
                type="error"
              >
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
                <label style="font-weight: bold">Email</label>
                <v-text-field
                  label="Email"
                  :value="form.email"
                  outlined
                  dense
                  class="mt-2"
                  readonly
                />
              </div>

              <div>
                <label style="font-weight: bold">Profile Name</label>
                <v-text-field
                  label="Enter profile name"
                  v-model="form.profileName"
                  outlined
                  dense
                  class="mt-2"
                  :rules="[(v) => !!v || 'Profile Name is required']"
                />
              </div>

              <div>
                <label style="font-weight: bold">Designation</label>
                <v-text-field
                  label="Enter your designation"
                  v-model="form.designation"
                  outlined
                  dense
                  class="mt-2"
                  :rules="[(v) => !!v || 'Designation is required']"
                />
              </div>

              <div>
                <label style="font-weight: bold">Description</label>
                <v-textarea
                  label="Enter your description"
                  v-model="form.description"
                  outlined
                  dense
                  class="mt-2"
                  :rules="[(v) => !!v || 'Description is required']"
                  multi-line
                />
              </div>

              <div>
                <label style="font-weight: bold">Location</label>
                <v-text-field
                  label="Enter your location"
                  v-model="form.location"
                  outlined
                  dense
                  class="mt-2"
                  :rules="[(v) => !!v || 'Location is required']"
                />
              </div>
            </div>
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click.stop="close" text>cancel</v-btn>
            <v-btn type="submit" color="success">Edit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
  
<script>
import Auth from '../../../Repository/Auth';


export default {
  data() {
    return {
      dialog: false,

      errorShow: false,
      error: "Sample error",

      success: "",
      successShow: false,

      form: {
        email: this.$store.state.currentUser.email,
        profileName: "",
        designation: "",
        description: "",
        location: "",
      },
    };
  },

  watch: {
    dialog() {
      this.form.email = this.$store.state.currentUser.email;
      this.form.profileName = this.$store.state.currentUser.fullname;
      this.form.designation = this.$store.state.currentUser.designation;
      this.form.description = this.$store.state.currentUser.about;
      this.form.location = this.$store.state.currentUser.location;
    },
  },

  methods: {
    async close() {
      this.form.contactId = "";
      this.form.contactName = "";
      //   this.$refs.addForm.reset();
      this.dialog = false;
    },

    proPic() {
      return (
        process.env.VUE_APP_SOCKET_URL +
        this.$store.state.currentUser.profile_image
      );
    },

    userEmail() {
      return this.$store.state.currentUser.email;
    },

    async submitEditForm(e){
        
        this.errorShow = false;
        this.successShow = false;
        this.success = '';
        this.error = '';

        e.preventDefault();

        if(!this.$refs.editForm.validate()){
            return
        }

        try{

            let res = await Auth.editProfile({
                profileName : this.form.profileName,
                designation : this.form.designation,
                description : this.form.description,
                location : this.form.location
            });

            this.successShow = true;
            this.success = res.data.message;

        }catch(err){
            console.log(err);
            this.errorShow = true;
            this.error = err.response.data.error
        }

    }


  },
};
</script>