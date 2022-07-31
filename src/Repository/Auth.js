import api from '../API';

export default {

    async login(form) {

        return api.post('/auth/login', form , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

    }

}