<template>
  <v-dialog persistent max-width="500" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" fab outlined text x-small>
        <v-icon color="success">mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Add to favourite</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <v-form @submit="handleSubmit">
          
          <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
            {{ error }}
          </v-alert>

          <v-alert v-model="successShow" class="mb-5" dense outlined type="success">
            {{ success }}
          </v-alert>

          <v-text-field
            label="Search here..."
            outlined
            dense
            class="mt-2"
            append-icon="mdi-magnify"
            v-model="searchString"
            @input="handleSearch"
          />

          <v-list
            transition="scroll-y-transition"
            flat
            subheader
            three-line
            color="#262626"
            height="200"
            style="overflow-y: scroll"
          >
            <v-subheader>Direct Contacts</v-subheader>

            <v-list-item-group v-model="favouriteList" multiple active-class="">
              <v-list-item
                dense
                v-for="(item, index) in constactList"
                :key="index"
              >
                <template v-slot:default="{ active }">

                  <v-list-item-action class="my-auto">
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-avatar class="mr-3 my-auto">
                    <img
                      :src="profile_image(item)"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content class="my-auto">
                    <v-list-item-title>{{item.contact_name}}</v-list-item-title>
                  </v-list-item-content>

                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-card-actions>

            <v-spacer></v-spacer>

            <v-btn color="red" @click.stop="dialog = false" text>cancel</v-btn>

            <v-btn type="submit" :disabled="favouriteList.length == 0" color="success">
              <v-icon>mdi-send</v-icon>
            </v-btn>

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
      showContact: false,
      errorShow: false,
      error: "Sample error",
      favouriteList : [],
      searchString : "",
      constactList : this.$store.state.contact.directContacts,

      successShow : false,
      success : ''

    };
  },

  computed : {

    directContacts(){
      return this.$store.state.contact.directContacts;
    },

  },

  methods: {

    handleSearch(){
      this.constactList = this.$store.state.contact.directContacts.filter( (item) =>  item.contact_name.toLowerCase().includes(this.searchString.toLowerCase()) );
    },

    profile_image(item){
      return process.env.VUE_APP_SOCKET_URL +  item.user.profile_image
    },

    async handleSubmit(e){
      e.preventDefault();

      this.successShow = false;
      this.errorShow = false;

      try{

        for(let i = 0; i < this.favouriteList.length; i++){
          let form = {
            contactId : this.constactList[this.favouriteList[i]].contact_id+''
          }
          // console.log(this.constactList[this.favouriteList[i]])
          await Contact.addToFavourite(form);
        }
        
        this.successShow = true;
        this.success = "Contact added to favourite successfully";

      }catch(err){
        this.errorShow = true;
        this.error = err.response.data.error;
      }

    }

    

  }


};
</script>