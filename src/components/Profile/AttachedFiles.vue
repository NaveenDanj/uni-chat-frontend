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
        v-for="(item, index) in list"
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
                <span style="color: #9ba2a9">{{ fileNameFormatter(item.file_original_name) }}</span><br />
                <span style="color: #9ba2a9">{{ formatSize(item.file_size) }}</span>
              </label>

              <v-btn @click="() => handleDownload(item.file_path) " x-small icon fab>
                <v-icon style="color: #9ba2a9">mdi-download</v-icon>
              </v-btn>

              <!-- <v-btn x-small icon fab>
                <v-icon style="color: #9ba2a9">mdi-dots-vertical</v-icon>
              </v-btn> -->
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  
  props : ['list'],

  methods : {

    fileNameFormatter(filename){
      return filename.length > 15 ? filename.slice(0 , 15) + "..." : filename;
    },

    formatSize(size){
      return (size / 1024).toFixed(2)+ "" + "MB"
    },

    handleDownload(path){
      window.open(path , '_blank');
    }

  }

}
</script>