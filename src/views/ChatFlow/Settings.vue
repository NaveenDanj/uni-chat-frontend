<template>
  <div class="pa-4" style="color: #adb5bd">
    <div
      style="
        width: 100%;
        height: 150px;
        color: white;
        background-color: #4eac6d;
      "
      class="pa-2"
    >
      <div class="d-flex justify-space-between">
        <h3 class="my-auto">Settings</h3>
        <v-btn class="my-auto" icon fab color="white" x-small>
          <v-icon color="white">mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="mb-2">
      <div class="d-flex justify-center">
        <v-avatar
          size="80px"
          class="mx-auto"
          style="margin-top: -50px; border: 1px solid gray"
        >
          <img
            :src="profilePic()"
          />
        </v-avatar>
      </div>
    </div>

    <div class="mt-10" style="height : 60vh; overflow-y:auto">
      <v-expansion-panels dark class="elevation-0">
        <v-expansion-panel style="background-color: #262626" elevation="0">
          <v-expansion-panel-header class="elevation-0">
            <div class="d-flex">
              <v-icon class="mr-2">mdi-account</v-icon>
              <label class="my-auto">Personal Info</label>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content elevation="0">
            <PersonalInfo />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color: #262626" elevation="0">
          <v-expansion-panel-header class="elevation-0">
            <div class="d-flex">
              <v-icon class="mr-2">mdi-lock</v-icon>
              <label class="my-auto">Privacy</label>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content elevation="0">
            <Privacy />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel style="background-color: #262626" elevation="0">
          <v-expansion-panel-header class="elevation-0">
            <div class="d-flex">
              <v-icon class="mr-2">mdi-security</v-icon>
              <label class="my-auto">Security</label>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content elevation="0">
            <div class="d-flex justify-space-between">
              <label class="mt-2">Show security notification</label>
              <!-- switch -->
              <v-switch
                class="mt-1"
                color="success"
                style="font-size: 12px"
              ></v-switch>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import PersonalInfo from "../../components/Settings/PersonalInfo.vue";
import Privacy from "../../components/Settings/Privacy.vue";
export default {
  components: { PersonalInfo, Privacy },

  methods : {

    profilePic(){
      return process.env.VUE_APP_SOCKET_URL + this.$store.state.currentUser.profile_image
    }

  }

};
</script>