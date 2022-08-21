<template>

  <div class="mt-2" style="max-width: 80%; min-width: 40%; float: right">

    <div v-if="$store.state.chat.chat.messages[index].message_type == 'text' " class="pa-3 ml-10" style="background-color: rgba(53, 75, 60, 0.5)">

      <p>
        {{ $store.state.chat.chat.messages[index].message }}
      </p>

    </div>

    <ImageChatComponent
      v-else-if="$store.state.chat.chat.messages[index].message_type == 'image' "
      belong="me"
      :item="$store.state.chat.chat.messages[index]"
    />

    <div class="d-flex mt-3" style="float: right">
      <!-- read receipt icon -->
      <v-icon v-if="$store.state.chat.chat.messages[index].is_read" small style="color: #4eac6d">mdi-check-circle</v-icon>
      <label style="font-size: 12px" class="ml-2">{{
        formatDate(item.createdAt)
      }}</label>
    </div>

  </div>

</template>

<script>
import moment from "moment";
import ImageChatComponent from "./Types/ImageChatComponent.vue";

export default {
    props: ["item", "index"],
    methods: {
        formatDate(date) {
            // if date is today then return time
            if (moment(date).isSame(moment(), "day")) {
                return moment(date).format("h:mm a");
            }
            else {
                return moment(date).format("MMM DD");
            }
        },
    },
    components: { ImageChatComponent }
};
</script>