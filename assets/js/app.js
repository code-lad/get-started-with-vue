new Vue({
  el: "#app",
  data: {
    title1: "Getting Started With Vue",
    title2: "Data Rendering",
    title3: "Data Binding",
    title4: "Events",
    title5: "Conditions",
    fname: "Wonderboy",
    lname: "Sokhulu",
    age: "25",
    btnp: "btn btn-primary",
    btnd: "btn btn-danger",
    coords: {
      x: 0,
      y: 0,
    },
    showMessage: true,
    fruits: ["Mango", "Apple", "Orange", "Pineapple", "Banana"],
    friends: [
      { name: "Ayanda", age: "30", job: "Yes" },
      { name: "Lizwi", age: "20", job: "No" },
      { name: "Khehla", age: "25", job: "Temporal" },
      { name: "Linda", age: "35", job: "Yes" },
      { name: "Velani", age: "40", job: "No" },
    ],
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
    logMessage(e) {
      console.log("Welcome to vue dev");
    },
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
  },
});
