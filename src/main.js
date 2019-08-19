import Vue from 'vue'
import { constants } from 'zlib';



Vue.component('rre-component', {
  data() {
    return {
      titulo: 'Curso de vueJs',
      contador: 0
    }
  },
  methods: {
    incrementar : function(){
      this.contador++
    }
  }, 
  template: `
    <div>
    <h1>{{titulo}}</h1>
    <button @click="incrementar" >Clicado {{contador}} vezes </button> 
    </div>
    `
})

new Vue({
  el:'#app'
})
