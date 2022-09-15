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
            src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
          />
        </v-avatar>
      </div>
    </div>

    <div class="mt-10">
      <v-expansion-panels dark class="elevation-0">
        <v-expansion-panel style="background-color: #262626" elevation="0">
          <v-expansion-panel-header class="elevation-0">
            <div class="d-flex">
              <v-icon class="mr-2">mdi-account</v-icon>
              <label class="my-auto">Personal Info</label>
            </div>
          </v-expansion-panel-header>

          <v-expansion-panel-content elevation="0">
            <div>
              <div class="d-flex justify-space-between">
                <div class="my-auto">
                  <label>Name</label><br />
                  <label>Adam Zampa</label>
                </div>
                <!-- <v-btn class="my-auto" icon fab x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn> -->
                <EditProfile />
              </div>

              <div class="mt-5">
                <label>Email</label><br />
                <label>adc@123.com</label>
              </div>

              <div class="mt-5">
                <label>Location</label><br />
                <label>California, USA</label>
              </div>
            </div>
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
            <div>
              <div>
                <div class="my-auto">
                  <label>Profile Photo</label><br />
                  <!-- select box -->
                  <v-select
                    :items="[
                      { text: 'Public', value: 'public' },
                      { text: 'Private', value: 'private' },
                    ]"
                    outlined
                    dense
                    color="white"
                    value="public"
                    style="font-size: 12px"
                  ></v-select>
                </div>

                <div class="my-auto">
                  <label>Last seen</label><br />
                  <!-- switch -->
                  <v-switch
                    color="success"
                    style="font-size: 12px"
                  ></v-switch>
                </div>

                <div class="my-auto">
                  <label>Read receipts</label><br />
                  <!-- switch -->
                  <v-switch
                    color="success"
                    style="font-size: 12px"
                  ></v-switch>
                </div>

                <div class="my-auto">
                  <label>Groups</label><br />
                  <!-- switch -->
                  <v-select
                    :items="[
                      { text: 'Everyone', value: 'everyone' },
                      { text: 'Nobody', value: 'nobody' },
                    ]"
                    outlined
                    dense
                    color="white"
                    value="everyone"
                    style="font-size: 12px"
                    dark
                  ></v-select>
                </div>
              </div>
            </div>
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
import EditProfile from '../../components/Dialogs/Settings/EditProfile.vue';
export default {
    components: { EditProfile }
}
</script>