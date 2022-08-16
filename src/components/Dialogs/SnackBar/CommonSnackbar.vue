<template>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      bottom
      :color="color"
      outlined
      right
    >
      {{ text }}
    </v-snackbar>

</template>

<script>
export default {
    props : ['snackbar' , 'timeout' , 'color']
}
</script>