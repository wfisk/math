<script>
  import { onMount } from "svelte";
  import Router, {
    location as routeLocation,
    replace as routeReplace,
  } from "svelte-spa-router";
  import routesMath from "/src/config/routesMath";

  onMount(() => {
    if ($routeLocation === "/math") {
      routeReplace("/math/index");
    }
  });
</script>

<Router routes={routesMath} />
