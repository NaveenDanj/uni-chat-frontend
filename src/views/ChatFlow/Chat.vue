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
    <FavouriteList
      :items="[]"
    />

    <DirectContact
      :items="[]"
    />

    <ChannelList
      :items="[]"
    />

  </div>
</template>

<script>
import CreateChannel from '../../components/Dialogs/CreateChannel.vue';
import AddContact from '../../components/Dialogs/AddContact.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
import FavouriteList from '../../components/SideSection/FavouriteList.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
import ChannelList from '../../components/SideSection/ChannelList.vue';
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: "Bella Cote" },
                { title: "Steven Jury" },
                { title: "James Pinard" },
                { title: "Alissa Richards" },
            ],
        };
    },
    components: { CreateChannel, AddContact, DirectContact, FavouriteList, DirectContact, ChannelList }
}
</script>
