import { on_campus_cached } from "./mod.ts";

if (await on_campus_cached()) {
  console.log("🏫 on campus");
} else {
  console.log("👽 off campus");
}
