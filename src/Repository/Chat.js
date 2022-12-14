import api from '../API';

export default {

    async loadUserChats(userId , roomId , page){

        return api.get(`/chat/get_user_messages?contact_id=${userId}&room_id=${roomId}&page=${page}` , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async uploadFile(form , to_user){

        return api.post(`/chat/upload-file?to_user=${to_user}` , form , {

            headers : {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }

        });

    },

    async searchChat(userId , roomId , query){

        return api.get(`/chat/search-chat?contact_id=${userId}&room_id=${roomId}&query=${query}` , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

    }

}