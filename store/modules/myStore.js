/**
 * Created by XPL on 2019/9/22.
 */

const state = () => ({
    myList: ['What', 'can', 'I', 'do'],
    user: {}
});

const mutations = {
    add(state, data) {
        state.myList.push(data);
    },
    user(state, data) {
        state.user = {...state.user, data};
    }
};

const actions = {
    add({commit}, data) {
        commit('add', data);
    },
    async updateUser({commit}, data) {
        await commit('user', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
