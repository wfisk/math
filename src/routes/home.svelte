<script>
  import {
    fade
  } from 'svelte/transition';
</script>
<template>
  <div in:fade={{duration:800}}>
    <h1>Home</h1>
  </div>
</template>