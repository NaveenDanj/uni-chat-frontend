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
        <h3 class="my-auto">My Profile</h3>
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
          style="margin-top: -50px; border: 1px solid gray; cursor: pointer"
        >
          <input
            type="file"
            hidden
            ref="propicker"
            accept="image/*"
            @change="handleUploadProPic"
          />
          <img
            @click="handleOpenFileDialog"
            :src="profileImage()"
          />
        </v-avatar>
      </div>
      <div class="mt-1">
        <center>
          <h3>{{ fullname() }}</h3>
          <label>{{ designation() }}</label>
        </center>
      </div>
    </div>

    <v-divider dark />

    <div>
      <div>
        <div class="pa-3">
          <p>
            {{ about() }}
          </p>

          <div>
            <div class="d-flex">
              <v-icon small class="my-auto" dark>mdi-account</v-icon>
              <label class="ml-5 my-auto" style="font-size: 13px">{{
                fullname()
              }}</label>
            </div>
            <div class="d-flex mt-2">
              <v-icon small class="my-auto" dark
                >mdi-message-reply-text-outline</v-icon
              >
              <label class="ml-5 my-auto" style="font-size: 13px">{{
                email()
              }}</label>
            </div>
            <div class="d-flex mt-2">
              <v-icon small class="my-auto" dark>mdi-map-marker</v-icon>
              <label class="ml-5 my-auto" style="font-size: 13px">{{
                location()
              }}</label>
            </div>
            <div class="d-flex mt-2">
              <v-icon small class="my-auto" dark>mdi-share-circle</v-icon>
              <label class="ml-5 my-auto" style="font-size: 13px">{{
                userId()
              }}</label>
            </div>
          </div>
        </div>

        <v-divider class="pa-0" dark />

        <div class="pa-3">
          <div class="d-flex justify-space-between">
            <label class="my-auto" style="font-size: 13px">MEDIA</label>
            <v-btn class="my-auto" color="success" text style="font-size: 13px"
              >Show all</v-btn
            >
          </div>

          <div class="d-flex justify-start mt-2">
            <img
              width="80"
              height="80"
              class="mr-2"
              src="https://themesbrand.com/doot/layouts/assets/images/small/img-1.jpg"
            />
            <img
              width="80"
              height="80"
              class="mr-2"
              src="https://themesbrand.com/doot/layouts/assets/images/small/img-2.jpg"
            />
            <img
              width="80"
              height="80"
              src="https://themesbrand.com/doot/layouts/assets/images/small/img-1.jpg"
            />
          </div>
        </div>

        <v-divider class="pa-0" dark />

        <div class="pa-3">
          <div class="d-flex justify-space-between">
            <label class="my-auto" style="font-size: 13px"
              >ATTACHED FILES</label
            >
            <v-btn class="my-auto" color="success" text style="font-size: 13px"
              >Show all</v-btn
            >
          </div>

          <v-list dark color="#262626">
            <v-list-item
              class="mt-2"
              v-for="(item, index) in [1, 2, 3, 4]"
              :key="index"
              style="border: 0.8px solid rgba(60, 175, 80, 0.3)"
            >
              <v-list-item-avatar>
                <v-icon color="success">mdi-file-document-outline</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <div class="d-flex justify-space-between">
                    <label class="my-auto" style="font-size: 13px">
                      <span style="color: #9ba2a9">design-phase-1...</span
                      ><br />
                      <span style="color: #9ba2a9">12.5MB</span>
                    </label>

                    <v-btn x-small icon fab>
                      <v-icon style="color: #9ba2a9">mdi-download</v-icon>
                    </v-btn>

                    <v-btn x-small icon fab>
                      <v-icon style="color: #9ba2a9">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <CommonSnackbar
          :snackbar="snackShow"
          :color="snackColor"
          :timeout="2000"
          :text="snackText"
        />
      </div>
    </div>
  </div>
</template> 

<script>
import Auth from "../../Repository/Auth";
import CommonSnackbar from "../../components/Dialogs/SnackBar/CommonSnackbar.vue";

export default {
  components: {
    CommonSnackbar,
  },

  data(){
    return{
      snackShow : false,
      snackText : '',
      snackColor : 'red'
    }
  }, 

  methods: {
    handleOpenFileDialog() {
      let elem = this.$refs.propicker;
      elem.click();
    },

    profileImage(){
      return process.env.VUE_APP_SOCKET_URL + this.$store.state.currentUser.profile_image;
    },

    async handleUploadProPic(event) {

      const formData = new FormData();
      formData.append("avatar", event.target.files[0]);
      this.snackShow = false;

      try {
        let res = await Auth.uploadProPic(formData);
        this.snackShow = true;
        this.snackText = "Profile Picture uploaded successfully!";
        this.snackColor = 'success';
      } catch (err) {
        this.snackShow = true;
        this.snackText = "Something went wrong!";
        this.snackColor = 'red';
      }
    },

    fullname() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.fullname;
    },

    designation() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.designation || "No designation";
    },

    about() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.about || "No description";
    },

    email() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.email;
    },

    location() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.location || "No location";
    },

    userId() {
      if (!this.$store.state.currentUser) {
        return "loading...";
      }

      return this.$store.state.currentUser.userId;
    },
  },
};
</script>