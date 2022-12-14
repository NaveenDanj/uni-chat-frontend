import api from '../API';

export default {

    async login(form) {

        return api.post('/auth/login', form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

    },

    async register(form) {

        return api.post('/auth/register' , form , {
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        });

    },

    async getCurrentUser(){

        return api.get('/auth/current-user' , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

    },

    async logout(){

        return api.post('/auth/logout' , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async uploadProPic(form){
        return api.post('/user/upload-profile-picture' , form , {
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    },

    async getUserMedia(page , limit){

        return api.get(`/chat/get-user-media?page=${page}&limit=${limit}` , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async editProfile(form){
        return api.post('/user/edit-profile' , form , {
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    },

    async updateProfileImagePrivacy(form){
        return api.post('/user/update-profile-photo-privacy' , form , {
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    },

    async updateshowOnlinePrivacy(form){
        return api.post('/user/update-show-online-privacy' , form , {
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    },

    async updateReadReceiptPrivacy(form){
        return api.post('/user/update-read-receipt-privacy' , form , {
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    }

}