const ContactStore = {
    state: {
        directContacts : [],
        favoriteContacts : [],
        channels : [],
    },

    mutations: {

        addDirectContact(state , directContact) {
            state.directContacts.push(directContact);
        },

        resetDirectContacts(state) {
            state.directContacts = [];
        },

        addFavoriteContact(state , favoriteContact) {
            state.favoriteContacts.push(favoriteContact);
        },

        resetFavoriteContacts(state) {
            state.favoriteContacts = [];
        },

        addChannel(state , channel) {
            state.channels.push(channel);
        }

    }

}

export default ContactStore;