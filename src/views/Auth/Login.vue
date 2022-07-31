<template>
  <div class="containerr">
    
    <div class="loginContainer">
        
        <v-row style="height : 100%">

            <v-col cols="12" md="6" style="background-color : #080E15">

                <div class="formContainer">
                    <v-form @submit="handleLogin" ref="loginForm">
                        <center><h1>Sign in</h1>
                        <label>Enter your email address and password to access admin panel.</label>
                        </center>

                        <v-alert
                            v-model="errorShow"
                            class="mt-5"
                            dense
                            outlined
                            type="error"
                        >
                            I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error
                        </v-alert>

                        <div class="mt-5">
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
                            <div class="d-flex justify-space-between" >
                                <label>Password</label>
                                <label style="cursor : pointer;">Forgot password?</label>
                            </div>
                            <v-text-field
                                v-model="form.password"
                                placeholder="Password"
                                type="password"
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
                            <v-btn type="submit" large color="#4EAC6D" dark rounded>Sign in</v-btn>
                        </div>


                    </v-form>
                </div>

            </v-col>

            <v-col cols="12" md="6" style="background-color : #4EAC6D">
                <div class="formContainer">
                    <div class="logoContainer">
                        <center><h1 class="title">UNI-CHAT</h1></center><br/>
                        <label>Enter your personal details and start journey with us</label><br/>
                        <center><v-btn @click="() => $router.push('/auth/register')" dense outlined width="150" dark rounded>Sign up</v-btn></center>
                    </div>
                </div>
            </v-col>

        </v-row>


    </div>


  </div>
</template>


<script>
export default {

    data(){
        return{
            form:{
                email : '',
                password : ''
            },

            error : '',
            errorShow : false
        }
    },
    
    methods : {

        handleLogin(e){
            e.preventDefault();
            console.log('login');

            if(!this.$refs.loginForm.validate()){
                return;
            }

            console.log('valid!');

        }


    }


}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=Lobster&display=swap');
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

.title{
    color : white;
    font-size : 50px;
    font-weight : 700;
    font-family: 'Lobster';
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