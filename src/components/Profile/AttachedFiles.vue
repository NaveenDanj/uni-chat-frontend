<template>
  <div class="pa-3">
    <div class="d-flex justify-space-between">
      <label class="my-auto" style="font-size: 13px">ATTACHED FILES</label>
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
                <span style="color: #9ba2a9">design-phase-1...</span><br />
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
</template>