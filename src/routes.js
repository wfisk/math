import HomePage from 'src/routes/home.svelte';
import MathPage from 'src/routes/math.svelte';
import NotFoundPage from 'src/routes/not-found.svelte';

export default {
  // Exact path
  '/': HomePage,
  "/math": MathPage,



  '*': NotFoundPage,
};