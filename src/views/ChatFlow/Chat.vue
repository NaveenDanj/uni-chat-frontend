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
        @input="handleSearch"
        v-model="searchString"
      />
    </div>

    <!-- favourites -->
    <FavouriteList
      v-if="favouriteList.length > 0"
      :favouriteList="favouriteList"
    />

    <div v-if="directContactList.length > 0" class="d-flex justify-space-between">
        <label class="my-auto" style="font-size : 10px;">DIRECT MESSAGES</label>
        <div class="my-auto">
          <DirectContact />
        </div>
    </div>

    <DirectContactList 
      v-if="directContactList.length > 0"
      :directContactList="directContactList"
    />

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
      drawer: true,
      favouriteList : [],
      directContactList : [],
      searchString : "",
    };
  },

  created(){
    console.log('this load!');
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

      this.favouriteList = this.$store.state.contact.favoriteContacts;
      this.directContactList = this.$store.state.contact.directContacts;

    },

    handleSearch(){
      this.directContactList = this.$store.state.contact.directContacts.filter( (item) =>  item.contact_name.toLowerCase().includes(this.searchString.toLowerCase()) );
      this.favouriteList = this.$store.state.contact.favoriteContacts.filter( (item) =>  item.contact_name.toLowerCase().includes(this.searchString.toLowerCase()) );
    },

  }

}
</script>
