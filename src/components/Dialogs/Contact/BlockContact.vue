<template></template><template>
  <v-dialog persistent max-width="500" v-model="showDialog">
    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="warning" dark>
        <v-toolbar-title class="subheading">Block Contact</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <p style="font-size: 17px">
          Are you sure you want to block "{{ contact.contact_name }}" from your
          contact list?
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click.stop="close" text>cancel</v-btn>
        <v-btn type="submit" @click="block" color="warning">BLOCK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
    
<script>
import Contact from '../../../Repository/Contact';

export default {
  props: ["showDialog", "contact"],

  data() {
    return {};
  },

  methods: {
    
    async close() {
      this.$emit("close");
    },

    async block(){

        try{

            let res = Contact.blockContact({
                contactId : this.contact.contact_id.toString()
            });

            window.location.reload();

        }catch(err){
            console.log(err)
        }

    }


},
};
</script>