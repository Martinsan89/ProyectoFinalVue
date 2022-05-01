var app = new Vue({
  el: "#app",
  data: {
    titulo: "Desafio Contador con Vue.js",
    marcador: 0,
  },
  methods: {
    subir() {
      this.marcador += 1;
    },
    bajar() {
      this.marcador -= 1;
    },
  },
});
