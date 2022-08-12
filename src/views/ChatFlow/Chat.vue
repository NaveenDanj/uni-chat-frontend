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
      :items="[1]"
    />

    <div class="d-flex justify-space-between">
        <label class="my-auto" style="font-size : 10px;">DIRECT MESSAGES</label>
        <div class="my-auto">
          <DirectContact />
        </div>
    </div>

    <DirectContactList
      :items="[1]"
    />

    <div class="d-flex justify-space-between">

      <label class="my-auto" style="font-size : 10px;">CHANNELS</label>

      <div class="my-auto">
        <CreateChannel />
      </div>

    </div>

    <ChannelList
      :items="[1]"
    />

  </div>
</template>

<script>
import CreateChannel from '../../components/Dialogs/CreateChannel.vue';
import AddContact from '../../components/Dialogs/AddContact.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
import FavouriteList from '../../components/SideSection/FavouriteList.vue';
import ChannelList from '../../components/SideSection/ChannelList.vue';
import DirectContactList from '../../components/SideSection/DirectContactList.vue';
export default {
  data() {
    return {
      drawer: true
    };
  },
  components: { CreateChannel, AddContact, DirectContact, FavouriteList, ChannelList, DirectContactList }
}
</script>
