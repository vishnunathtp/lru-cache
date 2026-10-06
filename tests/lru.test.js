const assert = require('node:assert');
const test = require('node:test');

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const oldestKey = this.map.keys().next().value;
      this.map.delete(oldestKey);
    }
  }
}

test('LRU cache operations', () => {
  const lru = new LRUCache(2);
  lru.put(1, 1);
  lru.put(2, 2);
  assert.strictEqual(lru.get(1), 1);
  lru.put(3, 3);
  assert.strictEqual(lru.get(2), -1);
  lru.put(4, 4);
  assert.strictEqual(lru.get(1), -1);
  assert.strictEqual(lru.get(3), 3);
  assert.strictEqual(lru.get(4), 4);
});
