# BIT on campus?

[![JSR](https://jsr.io/badges/@ydx/bit-on-campus)](https://jsr.io/@ydx/bit-on-campus)

Determine if on campus by trying to connect 10.0.0.55.

```typescript
import { on_campus_cached } from "jsr:@ydx/bit-on-campus";

if (await on_campus_cached()) {
  console.log("🏫 on campus");
} else {
  console.log("👽 off campus");
}
```
