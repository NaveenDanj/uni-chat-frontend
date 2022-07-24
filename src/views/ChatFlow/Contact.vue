<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <h3>Contacts</h3>
      </div>

      <div class="my-auto">
        <v-btn color="success" fab outlined x-small>
          <v-icon color="success">mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="mt-6">
      <v-text-field
        outlined
        placeholder="Search contacts..."
        append-icon="mdi-magnify"
        dense
        dark
        block
      />
    </div>

    <div>
      <div>
        <div class="d-flex">
          <label style="font-size: 12px; color: #4eac6d" class="mr-5">A</label>
          <v-divider class="my-auto" dark />
        </div>

        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px"
          >
            <v-list-item-avatar size="30px">
              <img
                src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon x-small>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-list-item-action>

          </v-list-item>
        </v-list>
      </div>

      <div>
        <div class="d-flex">
          <label style="font-size: 12px; color: #4eac6d" class="mr-5">B</label>
          <v-divider class="my-auto" dark />
        </div>

        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px"
          >
            <v-list-item-avatar size="30px">
              <img
                src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon x-small>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-list-item-action>

          </v-list-item>
        </v-list>
      </div>

      <div>
        <div class="d-flex">
          <label style="font-size: 12px; color: #4eac6d" class="mr-5">C</label>
          <v-divider class="my-auto" dark />
        </div>

        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            dense
            link
            style="font-size: 10px"
          >
            <v-list-item-avatar size="30px">
              <img
                src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon x-small>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-list-item-action>

          </v-list-item>
        </v-list>
      </div>



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
        { title: "Steven Jury" },
        { title: "James Pinard" },
        { title: "Alissa Richards" },
      ],
    };
  },
};
</script>