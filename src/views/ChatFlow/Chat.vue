<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">

      <div class="my-auto">
        <h3>Chats</h3>
      </div>

      <div class="my-auto">
        <AddContact />
      </div>
      
    </div>

    <!-- search -->
    <div class="mt-6">
      <v-text-field
        outlined
        placeholder="Search here..."
        append-icon="mdi-magnify"
        dense
        dark
        block
      />
    </div>

    <!-- favourites -->
    <FavouriteList v-if="$store.state.contact.favoriteContacts.length > 0" />

    <div v-if="$store.state.contact.directContacts.length > 0" class="d-flex justify-space-between">
        <label class="my-auto" style="font-size : 10px;">DIRECT MESSAGES</label>
        <div class="my-auto">
          <DirectContact />
        </div>
    </div>

    <DirectContactList v-if="$store.state.contact.directContacts.length > 0" />

    <div v-if="$store.state.contact.channels.length > 0" class="d-flex justify-space-between">

      <label class="my-auto" style="font-size : 10px;">CHANNELS</label>

      <div class="my-auto">
        <CreateChannel />
      </div>

    </div>

    <ChannelList v-if="$store.state.contact.channels.length > 0" />

  </div>
</template>

<script>
import CreateChannel from '../../components/Dialogs/CreateChannel.vue';
import AddContact from '../../components/Dialogs/AddContact.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
import FavouriteList from '../../components/SideSection/FavouriteList.vue';
import ChannelList from '../../components/SideSection/ChannelList.vue';
import DirectContactList from '../../components/SideSection/DirectContactList.vue';

import Contact from '../../Repository/Contact';

export default {

  components: { CreateChannel, AddContact, DirectContact, FavouriteList, ChannelList, DirectContactList },

  data() {
    return {
      drawer: true
    };
  },

  created(){
    this.loadContacts();
  },

  methods : {

    async loadContacts(){

      let res = await Contact.getAllContacts();

      this.$store.commit('resetDirectContacts');
      this.$store.commit('resetFavoriteContacts');

      for(let i = 0; i < res.data.contacts.length; i++){

        let contact = res.data.contacts[i];

        if(contact.is_favorite){
          this.$store.commit('addFavoriteContact' , contact);
        }else{
          this.$store.commit('addDirectContact' , contact);
        }

      }


    }

  }

}
</script>
