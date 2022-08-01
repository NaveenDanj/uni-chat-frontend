import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Auth from './Repository/Auth.js'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')

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
