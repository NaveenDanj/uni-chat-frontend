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

    }

}