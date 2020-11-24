import route_home from '../routes/home.svelte';
import route_fourier from '../routes/fourier.svelte';
import route_math from '../routes/math.svelte';
import route_not_found from '../routes/not-found.svelte';

export default {
  // Exact path
  '/': route_home,
  "/fourier": route_fourier,
  "/math": route_math,
  "/math/*": route_math,

  '*': route_not_found,
};