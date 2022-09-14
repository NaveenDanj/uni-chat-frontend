<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <h3>Bookmark</h3>
      </div>
    </div>

    <div class="mt-6">
      <v-text-field
        v-model="search"
        outlined
        placeholder="Search bookmark..."
        append-icon="mdi-magnify"
        dense
        dark
        block
        @input="handleSearch"
      />
    </div>

    <div
      class="mt-0"
      style="height: 81vh; overflow: auto"
      @scroll="handleScroll"
    >
      <v-list dark color="#262626">
        <div v-for="(item, index) in list" :key="index">
          <BookmarkItem :bookmark="item" />
          <v-divider dark />
        </div>
      </v-list>
    </div>
  </div>
</template>

<script>
import Bookmark from "../../Repository/Bookmark";
import BookmarkItem from "../../components/Bookmark/BookmarkItem.vue";

export default {
  created() {
    this.loadBookmars();
  },
  data() {
    return {
      list: [],
      search: "",
    };
  },
  methods: {
    async loadBookmars() {
      try {
        let data = await Bookmark.getAllBookmarks();
        this.list = data.data.bookmarks;
        console.log(this.list);
      } catch (err) {
        console.log(err);
      }
    },

    handleScroll() {
      console.log("scrolled!");
    },

    async handleSearch() {
      if (this.search.length > 0) {
        let searchRes = await Bookmark.searchBookmarks(this.search);
        console.log(searchRes);
        this.list = searchRes.data.bookmarks;
      } else {
        this.loadBookmars();
      }
    },
  },
  components: { BookmarkItem },
};
</script>