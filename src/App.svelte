<script>
  import Router from "svelte-spa-router";
  import { replace as routeReplace } from "svelte-spa-router";

  import DefaultNavbar from "/src/components/navbars/DefaultNavbar.svelte";
  import routes from "/src/config/routes";

  // export let name;

  function conditionsFailed(event) {
    // Perform any action, for example replacing the current route
    replace("/");
  }

</script>

<DefaultNavbar />

<Router {routes} on:conditionsFailed={conditionsFailed} />

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    color: blue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .sidebar {
    background: #e7e7e7;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

</style>
