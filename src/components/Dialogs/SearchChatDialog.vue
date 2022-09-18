<template>
  <v-dialog persistent max-width="700" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon fab small dark class="menuOptions">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Search Chat</v-toolbar-title>
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

          <v-alert
            v-model="successShow"
            class="mb-5"
            dense
            outlined
            type="success"
          >
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

          
        </v-form>

      </v-card-text>

    </v-card>

  </v-dialog>
</template>
  
  <script>

export default {
  data() {
    return {
      dialog: false,
      errorShow: false,
      error: "",
      searchString: "",
      successShow: false,
      success: "",
    };
  },

  computed: {
    directContacts() {
      return this.$store.state.contact.directContacts;
    },
  },

  methods: {
    handleSearch() {
    },

    profile_image(item) {
      return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
    },

    async handleSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>