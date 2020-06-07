import HomePage from 'src/pages/HomePage.svelte';
import MathPage from 'src/pages/MathPage.svelte';
import NotFoundPage from 'src/pages/NotFoundPage.svelte';

export default {
  // Exact path
  '/': HomePage,
  "/math": MathPage,
  '*': NotFoundPage,
};