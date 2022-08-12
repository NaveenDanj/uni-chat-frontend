<template>
  <div class="containerr">
    
    <div class="loginContainer">
        
        <v-row style="height : 100%">

            <v-col cols="12" md="6" style="background-color : #4EAC6D">
                <div class="formContainer">
                    <div class="logoContainer">
                        <center><h1 class="title">UNI-CHAT</h1></center><br/>
                        <label>To Keep connected with us please login with your personal info</label><br/>
                        <center><v-btn @click="() => $router.push('/auth/login')" dense outlined width="150" dark rounded>Sign in</v-btn></center>
                    </div>
                </div>
            </v-col>


            <v-col cols="12" md="6" style="background-color : #080E15">

                <div class="formContainer">
                    <v-form @submit="handleRegister" ref="regForm">
                        <center><h1>Sign Up</h1>
                        <label>Enter your email address and password to access admin panel.</label>
                        </center>

                        <v-alert
                            v-model="errorShow"
                            class="mt-5"
                            dense
                            outlined
                            type="error"
                        >
                           {{ error }}
                        </v-alert>

                        <div class="mt-10">
                            <label>Full Name</label>
                            <v-text-field
                                v-model="form.fullname"
                                placeholder="Your Full Name"
                                outlined
                                dense
                                dark
                                class="mt-3"
                                :rules="[
                                    v => !!v || 'Full name is required',
                                ]"
                            />
                        </div>

                        <div>
                            <label>Email address</label>
                            <v-text-field
                                v-model="form.email"
                                placeholder="Enter email"
                                outlined
                                dense
                                dark
                                class="mt-3"
                                :rules="[
                                    v => !!v || 'Email is required',
                                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                                ]"
                            />
                        </div>

                        <div>
                            <label>Phone Number</label>
                            <v-text-field
                                v-model="form.phone"
                                placeholder="Enter Phone Number"
                                outlined
                                dense
                                dark
                                class="mt-3"
                                :rules="[
                                    v => !!v || 'Phone Number is required',
                                ]"
                            />
                        </div>

                        <div>
                            <div class="d-flex justify-space-between" >
                                <label>Password</label>
                            </div>
                            <v-text-field
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                outlined
                                dense
                                dark
                                class="mt-3"
                                :rules="[
                                    v => !!v || 'Password is required',
                                    v => v.length >= 8 || 'Password must be more than 8 characters',
                                ]"
                            />
                        </div>

                        <div>
                            <v-btn type="submit" large color="#4EAC6D" dark rounded>Sign up</v-btn>
                        </div>


                    </v-form>
                </div>

            </v-col>

            

        </v-row>


    </div>


  </div>
</template>

<script>
import Auth from '../../Repository/Auth';
const { io } = require("socket.io-client");

export default {
    
    data(){
        return{
            errorShow : false,
            error : '',
            form : {
                fullname : '',
                email : '',
                phone : '',
                password : '',
            },
        }
    },

    methods : {

        async handleRegister(e){
            e.preventDefault();
            this.errorShow = false;
            this.error = '';
            try{

                if(!this.$refs.regForm.validate()){
                    return;
                }

                let form = {
                    fullname : this.form.fullname,
                    email : this.form.email,
                    phone : this.form.phone,
                    password : this.form.password,
                    device_name : navigator.userAgent
                };

                let res = await Auth.register(form);

                this.$store.commit('setCurrentUser' , res.data.user );
                localStorage.setItem('token' , res.data.token);
                const socket = io(process.env.VUE_APP_SOCKET_URL);
                socket.userId = res.data.user.userId;
                socket.userInstance = res.data.user;
                this.$store.commit('setSocket' , socket);

                this.$router.replace('/');
            
            }catch(err){
                this.errorShow = true;
                this.error = err.response.data.error;
            }

        }

    }

}
</script>


<style scoped>
.containerr {

    background-color : #010203;
    color : white;
    width : 100vw;
    height : 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.loginContainer{
    height: 90vh;
    width: 60%;
    border: 1px solid black;
    border-radius: 40px;
}

.formContainer{
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logoContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>