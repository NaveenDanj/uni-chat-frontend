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

    async getAllContacts(){
            
        return api.get('/contact/get_current_user_contact' , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
    
    }



}