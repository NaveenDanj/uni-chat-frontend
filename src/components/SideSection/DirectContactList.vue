<template>
  <div>
    <v-list dense dark color="#262626">
      <v-list-item
        v-for="(item, index) in $store.state.contact.directContacts"
        :key="index"
        dense
        link
        style="font-size: 10px"
      >
        <v-list-item-avatar size="30px">
          <img :src="propic(item)" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.contact_name }}</v-list-item-title>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ["items"],

  methods: {
    propic(item) {
      return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
    },
  },
};
</script>