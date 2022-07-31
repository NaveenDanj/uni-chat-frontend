<template>
  <div class="containerr">
    
    <div class="loginContainer">
        
        <v-row style="height : 100%">

            <v-col cols="12" md="6" style="background-color : #080E15">

                <div class="formContainer">
                    <form>
                        <center><h1>Sign in</h1>
                        <label>Enter your email address and password to access admin panel.</label>
                        </center>

                        <div class="mt-10">
                            <label>Email address</label>
                            <v-text-field
                                placeholder="Enter email"
                                outlined
                                dense
                                dark
                                class="mt-3"
                            />
                        </div>

                        <div>
                            <div class="d-flex justify-space-between" >
                                <label>Password</label>
                                <label style="cursor : pointer;">Forgot password?</label>
                            </div>
                            <v-text-field
                                type="password"
                                placeholder="Password"
                                outlined
                                dense
                                dark
                                class="mt-3"
                            />
                        </div>

                        <div>
                            <v-btn large color="#5645AA" dark rounded>Sign in</v-btn>
                        </div>


                    </form>
                </div>

            </v-col>

            <v-col cols="12" md="6" style="background-color : #7F62FB">
                <div class="formContainer">
                    <div class="logoContainer">
                        <center><img width="250" src="https://templates.iqonic.design/server360/html-dark/images/logo-full.png" /></center><br/>
                        <label>Enter your personal details and start journey with us</label><br/>
                        <center><v-btn dense outlined width="150" dark rounded>Sign up</v-btn></center>
                    </div>
                </div>
            </v-col>

        </v-row>


    </div>


  </div>
</template>


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