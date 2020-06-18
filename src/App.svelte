<script>
  import Router from "svelte-spa-router";
  import {
    wrap,
    replace
  } from "svelte-spa-router";

  import routes from 'src/routes';

  // export let name;


  function conditionsFailed(event) {
    // Perform any action, for example replacing the current route
    replace("/");
  }
</script>

<template>
  <div class="container-fluid">
    <div class="row" style="min-height: 100vh;">
      <div class="col-md-2 sidebar">
        <ul class="list-unstyled">
          <li>
            <a href="#/">
              Home
            </a>

          </li>
          <li>
            <a href="#/math">
              Math
            </a>

          </li>
        </ul>
      </div>
      <div class="col-md-10">
        <Router {routes} on:conditionsFailed={conditionsFailed} />
      </div>

    </div>

  </div>


</template>



<style global lang="scss">
  @import "styles/global.scss";

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