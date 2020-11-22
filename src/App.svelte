<script>
  import Router from "svelte-spa-router";
  import { wrap, replace } from "svelte-spa-router";

  import routes from "./routes";

  // export let name;

  function conditionsFailed(event) {
    // Perform any action, for example replacing the current route
    replace("/");
  }
</script>

<style global lang="scss">
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

<div class="container-fluid">
  <div class="row" style="min-height: 100vh;">
    <div class="col-2 sidebar">
      <ul class="list-unstyled">
        <li><a href="#/"> Home </a></li>
        <li><a href="#/math"> Math </a></li>
        <li><a href="#/fourier"> Fourier </a></li>
      </ul>
    </div>
    <div class="col-10">
      <Router {routes} on:conditionsFailed={conditionsFailed} />
    </div>
  </div>
</div>
