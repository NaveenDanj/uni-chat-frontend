<template>
  <v-menu
    dark
    left
    :offset-y="true"
    min-width="270"
    :close-on-click="true"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon fab small dark class="menuOptions">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>

    <v-list style="background-color: #383838">
      <v-list-item link>
        <v-list-item-title class="my-auto">Archive</v-list-item-title>

        <v-list-item-icon class="my-auto">
          <v-icon dark class="white--text" x-small>mdi-archive-arrow-down</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item link>
        <v-list-item-title class="my-auto">Mute</v-list-item-title>

        <v-list-item-icon class="my-auto">
          <v-icon dark class="white--text" x-small>mdi-volume-mute</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item link>
        <v-list-item-title class="my-auto">Delete Chat</v-list-item-title>

        <v-list-item-icon class="my-auto">
          <v-icon dark class="white--text" x-small>mdi-trash-can</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-menu>
</template>