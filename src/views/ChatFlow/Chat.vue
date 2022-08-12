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

    <div>
        <div class="d-flex justify-space-between">

            <label class="my-auto" style="font-size : 10px;">CHANNELS</label>

            <div class="my-auto">
              <CreateChannel />
            </div>

        </div>
        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item,index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px;"
          >
            <v-list-item-avatar size="30px">
              <v-icon>mdi-pound</v-icon>

            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>  

  </div>
</template>

<script>
import CreateChannel from '../../components/Dialogs/CreateChannel.vue';
import AddContact from '../../components/Dialogs/AddContact.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
import FavouriteList from '../../components/SideSection/FavouriteList.vue';
import DirectContact from '../../components/Dialogs/DirectContact.vue';
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
    components: { CreateChannel, AddContact, DirectContact, FavouriteList, DirectContact }
}
</script>
