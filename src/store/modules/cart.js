export default{
    state: {
        count: 0,
        obj: {
            message: '',
            color:'red'
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        updateMessage(state, message) {
            state.obj.message = message;
        },
        updateColor(state, color){
            state.obj.color = color;
        }
    }    
}