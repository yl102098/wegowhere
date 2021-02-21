export default {
    changeCity(state, city) {
        console.log(city)
        // 所有state中的city属性等于传来的city值
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {
            console.log(e)
        }
    }
}