import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Auth from './Repository/Auth.js'
const { io } = require("socket.io-client");

Vue.config.productionTip = false

mountApp();

async function mountApp(){

  let app_token = localStorage.getItem('token');

  if(app_token == null){
    
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");

    return;
  }

  try{

    let user = await Auth.getCurrentUser();
    store.commit('setCurrentUser' , user.data.user);

    const socket = io(process.env.VUE_APP_SOCKET_URL);
    socket.userId = user.data.user.userId;
    socket.userInstance = user.data.user;
    store.commit('setSocket' , socket);

  }catch(err){
    true
  }finally{

    
    
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");

  }

}
