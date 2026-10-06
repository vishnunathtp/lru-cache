# LRU Cache

Implementation of a Least Recently Used (LRU) Cache supporting $O(1)$ `get` and `put` operations.

## Design
- **Doubly Linked List:** Stores access order so nodes can be moved or removed in $O(1)$.
- **Hash Map:** Maps integer keys directly to nodes for $O(1)$ lookups.

## Complexity
- `get(key)`: $O(1)$
- `put(key, value)`: $O(1)$
- Space Complexity: $O(\text{capacity})$

## How to Run & Test
```bash
node --test tests/lru.test.js
```
