const state = {
  todos: [],
};

function render() {}

Vue.createApp({
  data() {
    return {
      headerText: "Meine To-do Liste",
      footerText: "Jimmy & Joe",
      todo: [],
      count: 0,
    };
  },
  methods: {
    countUp() {
      this.count++;
    },
  },
}).mount("#app");
