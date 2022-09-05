import api from '../API';

export default {

    async createContact(form) {

        return api.post('/contact/create' , form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async deleteContact(form){

        return api.post('/contact/delete' , form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async blockContact(form){

        return api.post('/contact/block' , form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async getAllContacts(){
            
        return api.get('/contact/get_current_user_contact' , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    
    },

    async addToFavourite(form){

        return api.post('/contact/add_to_favourite' , form , {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });

    },

    async updateContact(form){

        return api.put('/contact/update' , form , {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })

    }



}