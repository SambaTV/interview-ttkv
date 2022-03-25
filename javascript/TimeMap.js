class TimeMap {
  constructor() {
  }

  set(key, value, timestamp) {
    // Write your code here.
  }

  get(key, timestamp) {
    // Write your code here.
  }
}

const input = ["TimeMap", "set", "get", "get", "set", "get", "get"];
const input2 = [[], ["foo", "bar", 3], ["foo", 1], ["foo", 3], ["foo", 2], ["foo", 4], ["foo", 5]];
//expected output [null, null, "bar", "bar", null, "bar2", "bar2"]

const timeMap = new TimeMap();

