# Time Traveling Key Value store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the `TimeMap` class:
* `void set(String key, String value, int timestamp)`
  * Stores the key key with the value value at the given time timestamp.
* `String get(String key, int timestamp)`
  * Returns a value such that set was called previously, with `timestamp_prev <= timestamp`. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".


## Examples

**Input**
```
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
```

**Output:**
```
[null, null, "bar", "bar", null, "bar2", "bar2"]
```

## Constraints

* `1 <= key.length, value.length <= 100`
* key and value consist of lowercase English letters and digits.
* `1 <= timestamp <= 10^7`
* All the timestamps timestamp of `set` are strictly increasing