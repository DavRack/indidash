<script>
  import IndicatorCard from "$lib/components/IndicatorCard.svelte"
  import { indicators } from "$lib/data/stores/global.ts"
  console.log($indicators)
</script>

<div class="flex flex-row flex-wrap justify-center gap-6 p-8 px-16">
  {#each Object.entries($indicators) as [, value]}
    <IndicatorCard indicator={value} />
  {/each}
</div>
