import route__math__geometry__example_1 from "../routes/math/geometry/example-1.svelte";
import route__math__geometry__example_2 from "../routes/math/geometry/example-2.svelte";
import route__math__geometry__not_found from "../routes/math/geometry/not-found.svelte";

export default {
  "/math/geometry/example-1": route__math__geometry__example_1,
  "/math/geometry/example-2": route__math__geometry__example_2,
  "/math/geometry/*": route__math__geometry__not_found,
};
