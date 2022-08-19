<template>
  <v-snackbar
    dark
    v-model="snackbar"
    :timeout="timeout"
    absolute
    top
    :color="color"
    outlined
    right
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: ["snackbar", "timeout", "color", "text"],
};
</script>