var app = new Vue({
    el: '#app',
    data: {
        hola: 'holi con VUE',
        frutas: [
            {nombre: 'manzana', cantidad: 20},
            {nombre: 'fresa', cantidad: 0},
            {nombre: 'aguacate', cantidad: 2}
        ]
    }
})


var app2 = new Vue({
    el: '#app-2',
    data:{
        hola: 'holi con VUE',
    },
    methods: {
        reverseMessage: function(){
            this.hola=this.hola.split('').reverse().join('');
        }
    }
})


var app = new Vue({
    el: '#app-3',
    data: {
        mensaje: 'vue'
    }
})