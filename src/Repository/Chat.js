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

    }

}