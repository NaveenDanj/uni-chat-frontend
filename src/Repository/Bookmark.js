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


    async searchBookmarks(query){
        return api.get(`/bookmark/search?query=${query}` , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    }

}