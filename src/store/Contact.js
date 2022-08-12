const ContactStore = {
    state: {
        directContacts : [],
        favoriteContacts : [],
        channels : [],
    },

    mutations: {

        setDirectContacts(state , directContacts) {
            state.directContacts = directContacts;
        },

        setFavoriteContacts(state , favoriteContacts) {
            state.favoriteContacts = favoriteContacts;
        },

        setChannels(state , channels) {
            state.channels = channels;
        }

    }

}

export default ContactStore;