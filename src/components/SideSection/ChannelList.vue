<template>
    <div>
        <div class="d-flex justify-space-between">

            <label class="my-auto" style="font-size : 10px;">CHANNELS</label>

            <div class="my-auto">
              <CreateChannel />
            </div>

        </div>
        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item,index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px;"
          >
            <v-list-item-avatar size="30px">
              <v-icon>mdi-pound</v-icon>

            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    props : ['items']
}
</script>