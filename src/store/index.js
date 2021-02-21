import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    actions:{
        changeCity (ctx,city) {
            // ctx上下文，city接受的数据
            console.log("city",city)
            // 通过上下文调用commit方法，将city数据传递给state
            ctx.commit('changeCity',city)
        }
    },
    mutations: mutations
})