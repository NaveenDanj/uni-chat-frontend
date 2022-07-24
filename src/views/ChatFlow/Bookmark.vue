<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <h3>Bookmark</h3>
      </div>
    </div>

    <div class="mt-6">
      <v-text-field
        outlined
        placeholder="Search bookmark..."
        append-icon="mdi-magnify"
        dense
        dark
        block
      />
    </div>

    <div class="mt-0">
      <v-list dark color="#262626">
        <div v-for="(item, index) in [1, 2, 3, 4 ,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]"  :key="index">
            <v-list-item
              class="mt-2"
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
                      <v-icon style="color: #9ba2a9">mdi-dots-vertical</v-icon>
                    </v-btn>

                  </div>

                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider dark />
        </div>
      </v-list>
    </div>
  </div>
</template>