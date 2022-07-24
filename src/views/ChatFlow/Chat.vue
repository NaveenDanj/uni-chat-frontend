<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <h3>Chats</h3>
      </div>

      <div class="my-auto">
        <v-btn color="success" fab outlined x-small>
          <v-icon color="success">mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- search -->
    <div class="mt-6">
      <v-text-field
        outlined
        placeholder="Search here..."
        append-icon="mdi-magnify"
        dense
        dark
        block
      />
    </div>

    <!-- favourites -->
    <div>
        <label style="font-size : 10px;">FAVOURITES</label>
        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item,index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px;"
          >
            <v-list-item-avatar height="30" width="30">
              <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" />
            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>

    <div>
        <div class="d-flex justify-space-between">
            <label class="my-auto" style="font-size : 10px;">DIRECT MESSAGES</label>
            <div class="my-auto">
                <v-btn color="success" fab outlined text x-small>
                    <v-icon color="success">mdi-plus</v-icon>
                </v-btn>
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
            <v-list-item-avatar height="30" width="30">
              <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" />
            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>

    <div>
        <div class="d-flex justify-space-between">
            <label class="my-auto" style="font-size : 10px;">CHANNELS</label>
            <div class="my-auto">
                <v-btn color="success" fab outlined text x-small>
                    <v-icon color="success">mdi-plus</v-icon>
                </v-btn>
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
            <v-list-item-avatar height="30" width="30">
              <v-icon>mdi-pound</v-icon>

            </v-list-item-avatar>
    
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </div>  

  </div>
</template>

<script>
export default {
    data() {
    return {
      drawer: true,
      items: [
        { title: "Bella Cote" },
        { title: "Steven Jury"},
        { title: "James Pinard"},
        { title: "Alissa Richards"},
      ],
    };
  },
}
</script>
