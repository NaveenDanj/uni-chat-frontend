<template>
  <div class="pa-3">
    <div class="d-flex justify-space-between">
      <label class="my-auto" style="font-size: 13px">MEDIA</label>
      <ShowMoreMedia />
    </div>

    <div class="d-flex justify-start mt-2">

      <div v-for="(item , index) in list" :key="index">
        
        <div v-if="item.file_type == 'image' ">
          <img
            width="80"
            height="80"
            class="mr-2"
            :src="item.file_path"
          />
        </div>

        <div v-if="item.file_type == 'video' ">

          <video width="80" height="80" controls>
            <source :src="item.file_path" />
          </video>

        </div>
      
      </div>


    </div>
  </div>
</template>

<script>
import ShowMoreMedia from '../Dialogs/profile/ShowMoreMedia.vue';
export default {
    props: ["list"],
    components: { ShowMoreMedia }
}
</script>