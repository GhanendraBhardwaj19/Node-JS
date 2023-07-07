const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("My name is Ghanendra Bhardwaj!");
});

event.emit("sayMyName");

event.on("checkPage", (src, msg) => {
  console.log(`source is ${src} and message is ${msg}.`);
});
event.emit("checkPage", 200, "ok");
