Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countdown() {},
    reset() {
      this.count = 0;
    },
  },
}).mount("#app");
