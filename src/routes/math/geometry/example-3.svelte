<script>
  import { onMount } from 'svelte';
  import DefaultNavbar from '../../../components/navbars/DefaultNavbar.svelte';
  import { extent as d3Extent } from 'd3-array';
  import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
  import { scaleLinear as d3ScaleLinear } from 'd3-scale';
  import { select as d3Select } from 'd3-selection';
  import {
    curveBasis as d3CurveBasis,
    curveStep as d3CurveStep,
    line as d3Line,
  } from 'd3-shape';

  // Constants
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const sampleCount = 100;

  // Variables
  let self;
  let svg;
  let width = 960;
  let xAxis;
  let yAxis;

  // Dimensions
  $: plotBounds = {
    top: 0,
    left: 0,
    width: width,
    height: (9 / 16) * width,
  };
  $: chartBounds = {
    top: margin.top,
    left: margin.left,
    width: plotBounds.width - margin.left - margin.right,
    height: plotBounds.height - margin.top - margin.bottom,
  };

  // Data
  let data = [];
  for (let index of [...Array(sampleCount).keys()]) {
    let x = Math.PI * 2 * (index / sampleCount);
    let y = Math.sin(x);
    data.push({ x, y });
  }

  // Accessors
  let xOf = (it) => it.x;
  let yOf = (it) => it.y;

  // X Scale and Y Scale
  $: xScale = d3ScaleLinear()
    .domain(d3Extent(data, xOf))
    .range([0, chartBounds.width]);
  $: yScale = d3ScaleLinear()
    .domain(d3Extent(data, yOf))
    .range([0, chartBounds.height]);

  // X Axis and Y Axis
  $: xAxisOf = d3AxisBottom().scale(xScale);
  $: yAxisOf = d3AxisLeft().scale(yScale);

  // Paths
  const lineOf = d3Line()
    .curve(d3CurveBasis)
    .x((d) => xScale(xOf(d)))
    .y((d) => yScale(yOf(d)));

  // Reactive Statements
  $: height = (9 / 16) * width;
  // $: console.log({ data });

  $: if (yAxis) {
    console.log(yAxis);
    d3Select(yAxis).call(d3AxisLeft(yScale));
  }

  // Life cycle

  // Events

  function handleSwitch() {}
</script>

<div class="example-3" bind:this={self} bind:clientWidth={width}>
  <svg bind:this={svg} {width} {height}>
    <g
      class="chart"
      style="transform: translate({chartBounds.left}px,{chartBounds.top}px);">
      <rect width={chartBounds.width} height={chartBounds.height} />

      <!-- Y Axis -->
      <g
        class="y-axis"
        bind:this={yAxis}
        height={chartBounds.height}
        width={20}>
        <rect witdh={10} height={10} />
      </g>g
      <!-- Curve -->
      <path class="sine-curve" d={lineOf(data)} />
    </g></svg>
</div>

<button class="btn btn-primary" on:click={handleSwitch}>Switch</button>

<style>
  .chart > rect {
    stroke: gray;
    fill: transparent;
  }

  .sine-curve {
    fill: transparent;
    stroke: gray;
    stroke-width: 3;
  }
</style>
