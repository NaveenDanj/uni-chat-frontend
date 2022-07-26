<template>
    
    <div class="main">

        <div style="width : 100%">

            <div class="header d-flex justify-space-between">
                
                <div class="d-flex my-auto">

                    <div class="my-auto mr-2 backBtn">
                        <v-btn @click="() => $emit('backEvent') " icon dark small>
                            <v-icon>mdi-arrow-left-circle</v-icon>
                        </v-btn>
                    </div>

                    <v-avatar @click="drawer = true" size="40px" class="my-auto">
                        <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" />
                    </v-avatar>

                    <div class="my-auto ml-3">
                        <label @click="drawer = true">Bella Cote</label><br />
                        <label style="font-size : 11px;">Online</label>
                    </div>

                </div>

                <div class="d-flex my-auto">
                    <v-btn icon fab small dark class="ml-5">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-btn icon fab small dark class="ml-5">
                        <v-icon>mdi-information</v-icon>
                    </v-btn>

                    <v-btn icon fab small dark class="ml-5">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>

                </div>

            </div>
    
            <div class="contentMain">
                
                <div style="max-width : 80%;">

                    <div class="pa-3 ml-10" style="background-color: #383838;">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat molestias consectetur molestiae sunt eveniet eaque, officia nisi quisquam iusto! Quas eveniet saepe ipsa accusantium, ab quibusdam a! Illo, aperiam!</p>
                    </div>

                    <div class="mt-2 d-flex">
                        <v-avatar size="30px" class="my-auto ">
                            <img src="https://themesbrand.com/doot/layouts/assets/images/users/avatar-2.jpg" />
                        </v-avatar>

                        <label class="my-auto ml-2" style="font-size : 12px;">10:13 am</label>

                    </div>

                </div>

                <div style="max-width : 80%; float: right; ">

                    <div class="pa-3 ml-10" style="background-color: rgba(53, 75, 60, 0.5);">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat molestias consectetur molestiae sunt eveniet eaque, officia nisi quisquam iusto! Quas eveniet saepe ipsa accusantium, ab quibusdam a! Illo, aperiam!</p>
                    </div>

                    <div class="d-flex mt-3" style="float : right;">
                        <!-- read receipt icon -->
                        <v-icon small style="color : #4eac6d;">mdi-check-circle</v-icon>
                        <label style="font-size : 12px;" class="ml-2">10:14 am</label>
                    </div>

                </div>


            </div>

            <div class="footer">
                <v-text-field
                    label="Type a message..."
                    hide-details
                    style="width : 100%;"
                    dense
                    dark
                    outlined
                    class="my-auto"
                />

                <div class="d-flex ml-3 my-auto">
                    
                    <v-btn color="success">
                        <v-icon>mdi-send</v-icon>
                    </v-btn>
                    
                </div>

            </div>

        </div>

        <ProfileDetail :drawer="drawer" @drawClose="drawer = false " />


    </div>

</template>

<script>
import ProfileDetail from './ProfileDetail.vue';
export default {
    components: { ProfileDetail },

    data(){
        return{
            drawer : false,
        }
    }
}
</script>


<style>

.main{
    height: 100vh;
    overflow-y : hidden;
    display: flex;
    flex-direction: column;
}

.header{
    width: 100%;
    height: 10vh;
    padding: 10px;
    background-color: rgba(46, 46, 46, 0.7);
    border-bottom : 1px solid rgba(255, 255, 255, 0.1);
}

.contentMain{
    height: 80vh;
    background : url('https://themesbrand.com/doot/layouts/assets/images/bg-pattern/pattern-05.png');
    padding : 10px;
    overflow-y : auto;
}

.footer{
    width: 100%;
    height: 10vh;
    padding: 10px;
    background-color: rgba(46, 46, 46, 0.7);
    border-top : 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    flex-direction: row;
}

@media (min-width: 880px) {

 .backBtn {
    display: none;
 }

}

</style>