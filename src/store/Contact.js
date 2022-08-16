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
        },

        setContactOnlineStatus(state , contact) {

            let found = false;

            console.log("got data is : " , contact);

            for(let i = 0; i < state.directContacts.length; i++) {
                if(state.directContacts[i].id == contact.id) {
                    state.directContacts[i].user.is_online = contact.is_online;
                    found = true;
                    break;
                }
            }

            if(!found){
                for(let i = 0; i < state.favoriteContacts.length; i++) {
                    if(state.favoriteContacts[i].id == contact.id) {
                        state.favoriteContacts[i].user.is_online = contact.is_online;
                        break;
                    }
                }
            }


        }

    }

}

export default ContactStore;