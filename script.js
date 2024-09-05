// script.js
new Vue({
  el: "#app",
  data: {
    display: "",
    buttons: [
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      ".",
      "=",
      "+",
    ],
  },
  methods: {
    pressButton(button) {
      if (button === "=") {
        try {
          this.display = eval(this.display) || "";
        } catch {
          this.display = "Error";
        }
      } else {
        this.display += button;
      }
    },
    clearDisplay() {
      this.display = "";
    },
    getButtonClass(button) {
      if (button === "=") {
        return "equals";
      } else if (["/", "*", "-", "+"].includes(button)) {
        return "operator";
      } else {
        return "";
      }
    },
  },
});
