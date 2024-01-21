<script lang="ts">
  import Tag from "$lib/components/Tag.svelte"
  import type {NumberIndicator} from "$lib/data/stores/global.ts"
  export let indicator: NumberIndicator[]

  let inb = indicator[0]
  let locale = "es-CO"
</script>
<div class="flex flex-col justify-between w-64 h-64 shadow border rounded-xl p-3 hover:shadow-xl transition">
  <p class="text-center text-2xl">{inb.label}</p>
  <p class="text-center text-3xl font-bold">{inb.value} {inb.unit}</p>
  <div class="flex flex-row justify-start p-1 rounded">
    {#each inb.tags as tag}

     <Tag data={tag}/>
    {/each}
  </div>
  <a class="text-center p-1 border" href={inb.source} target="_blank">Fuente</a>
  <p class="text-center text-xs">Actualizado: {inb.updated_on.toLocaleString(locale, {timeZone: "UTC"})}</p>
</div>
