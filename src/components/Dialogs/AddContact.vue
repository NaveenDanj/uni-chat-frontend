<template>
  <v-dialog persistent max-width="500" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" fab outlined x-small>
        <v-icon color="success">mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Create Contact</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon small class="mr-0" @click.stop="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-5">
        <v-form>
          <v-alert v-model="errorShow" class="mb-5" dense outlined type="error">
            {{ error }}
          </v-alert>

          <div>
            <label style="font-weight: bold">User ID</label>
            <v-text-field
              label="Enter User ID"
              outlined
              dense
              class="mt-2"
            />
          </div>

        </v-form>
      
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click.stop="dialog = false" text>cancel</v-btn>
        <v-btn color="success">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      settings: [],
      showContact: false,
      errorShow: false,
      error: "Sample error",
    };
  },
};
</script>