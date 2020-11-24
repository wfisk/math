<script>
  import { beforeUpdate, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";

  import anime from "animejs";
  import { scaleLinear } from "d3-scale";
  import { extent } from "d3-array";

  import ChartAxis from "/src/components/charts/ChartAxis.svelte";

  let width;
  let height;
  let cx = 500;
  let cy = 500;
  let radius = 200;
  let xScale;
  let yScale;
  let xTicks = [];
  let yTicks = [];

  // chart margin
  const margins = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 25,
  };

  // scales
  $: xScale = scaleLinear()
    .domain([0, 20])
    .range([margins.left, width - margins.right]);

  $: yScale = scaleLinear()
    .domain([0, 15])
    .range([height - margins.bottom, margins.top]);

  // ticks
  $: xTicks = width > 360 ? [0, 4, 8, 12, 16, 20] : [0, 10, 20];

  $: yTicks = height > 180 ? [0, 3, 6, 9, 12, 15] : [0, 5, 15];

  afterUpdate(function () {
    let myAnimation = anime({
      targets: [".blue", ".green"],
      translateX: "13rem",
      rotate: 180,
      borderRadius: "8px",
      duration: 2000,
      loop: true,
    });
  });

  function handleKeyDown(event) {
    const KEY_LEFT = 37;
    const KEY_UP = 38;
    const KEY_RIGHT = 39;
    const KEY_DOWN = 40;

    if (event.keyCode === KEY_UP) {
      cy -= 10;
    } else if (event.keyCode === KEY_RIGHT) {
      cx += 10;
    } else if (event.keyCode === KEY_DOWN) {
      cy += 10;
    } else if (event.keyCode === KEY_LEFT) {
      cx -= 10;
    }
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:keydown={handleKeyDown} />

<template>
  <div in:fade={{ duration: 800 }}>
    {width},
    {height}

    <h1>Math</h1>
    <article>
      <div class="blue" />
      <div class="green" />
    </article>

    {#if !!width && !!height && !!xScale && !!yScale && !!xTicks && !!yTicks}
      <svg viewbox="0 0 1000 1000" width="800" height="600">
        <g class="axis y-axis">
          {#each yTicks as tick}
            <ChartAxis
              axisType="yAxis"
              translate="translate(0, {yScale(tick)})"
              x1={xScale(0)}
              x2={xScale(extent(xTicks)[1])}
              x={margins.left - 8}
              y="+4"
              text={tick} />
          {/each}
        </g>

        <!-- x axis -->
        <g class="axis x-axis">
          {#each xTicks as tick}
            <ChartAxis
              axisType="xAxis"
              translate="translate({xScale(tick)},0)"
              y1={yScale(0)}
              y2={yScale(extent(yTicks)[1])}
              y={height - margins.bottom + 16}
              text={tick} />
          {/each}
        </g>

        <circle class="circle" {cx} {cy} r="100" />

        <path
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z" />

        <path
          class="path"
          d="M {cx - radius}, {cy} a {radius},{radius} 0 1,0 {radius * 2},0 a {radius},{radius} 0 1,0 {-radius * 2},0" />
      </svg>
    {/if}
  </div>
</template>

<style>
  div {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }

  .blue {
    background-color: blue;
  }

  .green {
    background-color: green;
  }

  .circle {
    fill: transparent;
    stroke: black;
  }

  .path {
    fill: transparent;
    stroke: red;
  }
</style>
