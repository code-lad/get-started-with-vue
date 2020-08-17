new Vue({
  el: "#app",
  data: {
    title1: "Getting Started With Vue",
    title2: "Data Rendering",
    title3: "Data Binding",
    title4: "Vue Events",
    fname: "Wonderboy",
    lname: "Sokhulu",
    age: "25",
    btnp: "btn btn-primary",
    btnd: "btn btn-danger",
    coords: {
      x: 0,
      y: 0,
    },
  },
  methods: {
    changeAge(amount) {
      this.age -= amount;
    },
    logEvent(event) {
      console.log(event);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      ///console.log(e.target.value);
      this.fname = e.target.value;
    },
  },
});
