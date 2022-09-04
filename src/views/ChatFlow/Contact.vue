<template>
  <div class="pa-4" style="color: #adb5bd">
    <div class="d-flex justify-space-between">
      <div class="my-auto">
        <h3>Contacts</h3>
      </div>

      <div class="my-auto">
        <AddContact />
      </div>
    </div>

    <div class="mt-6">
      <v-text-field
        v-model="searchString"
        outlined
        placeholder="Search contacts..."
        append-icon="mdi-magnify"
        dense
        dark
        block
        @input="handleSearch"
      />
    </div>

    <div>



      <div v-for="(item , index) in charList" :key="index">

        <div class="d-flex">
          <label style="font-size: 12px; color: #4eac6d" class="mr-5">{{item}}</label>
          <v-divider class="my-auto" dark />
        </div>

        <v-list dense dark color="#262626">
          <v-list-item
            v-for="(contact, index2) in contactList[item] "
            :key="index2"
            dense
            link
            style="font-size: 10px"
          >
            <v-list-item-avatar size="30px">
              <img
                :src="formatImage(contact)"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ contact.contact_name }}</v-list-item-title>
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
import Contact from '../../Repository/Contact';
import AddContact from '../../components/Dialogs/AddContact.vue';

export default {
    async created() {
        this.loadContacts();
    },
    methods: {
        async loadContacts() {
            this.contactList = {};
            this.charList = [];
            let contacts = await Contact.getAllContacts();
            contacts = contacts.data.contacts;
            contacts = this.sortContact(contacts);
            for (let i = 0; i < contacts.length; i++) {
                let fChar = contacts[i].contact_name.toUpperCase()[0];
                if (this.contactList[fChar] == undefined) {
                    this.contactList[fChar] = [];
                }
                this.contactList[fChar].push(contacts[i]);
            }
            this.contactListCopy = Object.assign({}, this.contactList);
            this.charList = Object.keys(this.contactList);
        },
        sortContact(contacts) {
            return contacts.sort(function (a, b) {
                var nameA = a.contact_name.toUpperCase();
                var nameB = b.contact_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        },
        formatImage(item) {
            console.log("ran");
            return process.env.VUE_APP_SOCKET_URL + item.user.profile_image;
        },
        handleSearch() {
            let char = this.searchString.toUpperCase()[0];
            if (this.searchString == "") {
                this.loadContacts();
                return;
            }
            if (this.contactList[char] == undefined) {
                return;
            }
            this.contactList[char] = this.contactListCopy[char].filter((item) => item.contact_name.toLowerCase().includes(this.searchString.toLowerCase()));
            for (let i = 0; i < Object.keys(this.contactList).length; i++) {
                if (Object.keys(this.contactList)[i] != char) {
                    delete this.contactList[Object.keys(this.contactList)[i]];
                }
            }
        }
    },
    data() {
        return {
            contactList: {},
            charList: [],
            searchString: "",
            contactListCopy: {},
            drawer: true,
        };
    },
    components: { AddContact }
};
</script>