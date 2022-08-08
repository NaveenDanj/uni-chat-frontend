const Main = {

    state : () => ({
        currentUser : null,
        socket : null
    }),

    mutations: {

        setCurrentUser(state, user) {
            state.currentUser = user
        },
    
        setSocket(state , socket) {
            state.socket = socket;
        }

    }

}

export default Main;