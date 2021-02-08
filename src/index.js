
import Vue from 'vue'
import App from './app/app.vue'
const container = document.getElementById('container')

new Vue({
    el: '#app',
    render: h => {
        console.log(h);
        return h(App);
    }
})