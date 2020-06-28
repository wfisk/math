import route_home from 'src/routes/home.svelte';
import route_fourier from 'src/routes/fourier.svelte';
import route_math from 'src/routes/math.svelte';
import route_not_found from 'src/routes/not-found.svelte';

export default {
  // Exact path
  '/': route_home,
  "/fourier": route_fourier,
  "/math": route_math,



  '*': route_not_found,
};