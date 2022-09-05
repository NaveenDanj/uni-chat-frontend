import api from '../API';

export default {

    async getAllBookmarks() {

        return api.get('/bookmark/' , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

}