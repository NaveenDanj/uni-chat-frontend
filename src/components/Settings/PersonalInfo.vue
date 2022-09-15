<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <label>Name</label><br />
        <label>{{ $store.state.currentUser.fullname }}</label>
      </div>
      <!-- <v-btn class="my-auto" icon fab x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn> -->
      <EditProfile />
    </div>

    <div class="mt-5">
      <label>Email</label><br />
      <label>{{ $store.state.currentUser.email }}</label>
    </div>

    <div class="mt-5">
      <label>Location</label><br />
      <label>{{ $store.state.currentUser.location }}</label>
    </div>
  </div>
</template>

<script>
import EditProfile from '../Dialogs/Settings/EditProfile.vue';
export default { components: { EditProfile } };
</script>