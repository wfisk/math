<script>
  import { onMount } from "svelte";
  import Router, {
    location as routeLocation,
    replace as routeReplace,
  } from "svelte-spa-router";
  import routesMathGeometry from "/src/config/routesMathGeometry";

  onMount(() => {
    if ($routeLocation === "/math") {
      routeReplace("/math/index");
    }
  });
</script>

<Router routes={routesMathGeometry} />
