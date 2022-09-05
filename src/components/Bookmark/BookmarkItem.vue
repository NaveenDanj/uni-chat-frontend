<template>
  <v-list-item class="mt-2">
    <v-list-item-avatar>
      <v-icon color="success">mdi-file-document-outline</v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        <div class="d-flex justify-space-between">
          <label class="my-auto" style="font-size: 13px">
            <span style="color: #9ba2a9">design-phase-1...</span><br />
            <span style="color: #9ba2a9">12.5MB</span>
          </label>

          <v-btn x-small icon fab>
            <v-icon style="color: #9ba2a9">mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>