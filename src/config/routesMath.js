import route__math__geometry from "../routes/math/geometry.svelte";
import route__math__index from "../routes/math/index.svelte";
import route__math__not_found from "../routes/math/not-found.svelte";

export default {
  "/math/index": route__math__index,
  "/math/geometry": route__math__geometry,
  "/math/geometry/*": route__math__geometry,
  "/math/*": route__math__not_found,
};
