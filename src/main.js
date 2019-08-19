import Vue from 'vue'

Vue.component('rre-component', {
  data() {
    return {
      titulo: 'Curso de vueJs'
    }
  },
  template: '<h1>{{titulo}}</h1>'
})

new Vue({
  el:'#app'
})
