import Vue from 'vue';
import Vuex from 'vuex';
import city from './modules/city';
import navbar from './modules/navbar';
import myStore from './modules/myStore';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        city,
        navbar,
        myStore
    },
    actions: {
        nuxtServerInit({commit, dispath}, {req, res}) {
            console.log(req);
            // if (req.session.user) {
            //     commit('city', req.session.user);
            // }
        }
    }
});

export default store;
