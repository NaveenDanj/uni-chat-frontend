const ChatStore = {

    state : () => ({
        chat : {
            messages : [],
            users : [],
            typing : false,
            typingUsers : [],
            typingTimeout : null,
            typingTimeoutUsers : [],
            activeProfile : null
        }
    }),

    mutations: {

        setChatMessages(state , messages) {
            state.chat.messages = messages;
        },

        addChatMessage(state , message) {
            state.chat.messages.push(message);
        },

        setChatUsers(state , users) {
            state.chat.users = users;
        },

        setChatTyping(state , typing) {
            state.chat.typing = typing;
        },

        setChatTypingUsers(state , typingUsers) {
            state.chat.typingUsers = typingUsers;
        },

        setChatTypingTimeout(state , typingTimeout) {
            state.chat.typingTimeout = typingTimeout;
        },

        setChatTypingTimeoutUsers(state , typingTimeoutUsers) {
            state.chat.typingTimeoutUsers = typingTimeoutUsers;
        },

        setChatActiveProfile(state , activeProfile) {
            state.chat.activeProfile = activeProfile;
        }


    },

}

export default ChatStore;