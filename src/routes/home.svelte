<script>
  import { fade } from "svelte/transition";
</script>

<template>
  <div in:fade={{ duration: 800 }}>
    <h1>Home</h1>
    <p class="foo">Some text</p>
  </div>
</template>
