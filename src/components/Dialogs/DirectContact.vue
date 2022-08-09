<template>
  <v-dialog persistent max-width="500" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" color="success" fab outlined text x-small>
        <v-icon color="success">mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card color="#262626" dark>
      <v-toolbar class="transparent" elevation="0" color="success" dark>
        <v-toolbar-title class="subheading">Contacts</v-toolbar-title>
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

          <v-text-field
            label="Search here..."
            outlined
            dense
            class="mt-2"
            append-icon="mdi-magnify"
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
            <v-subheader>Contacts</v-subheader>

            <v-list-item-group v-model="settings" multiple active-class="">
              <v-list-item
                dense
                v-for="(item, index) in [1, 1, 1, 1, 1, 1]"
                :key="index"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-action class="my-auto">
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-avatar class="mr-3 my-auto">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content class="my-auto">
                    <v-list-item-title>Naveen Hettiwaththa</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>

        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click.stop="dialog = false" text>cancel</v-btn>
        <v-btn color="success">
            <v-icon>mdi-send</v-icon>
        </v-btn>
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