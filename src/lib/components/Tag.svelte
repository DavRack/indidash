<script lang="ts">
  import type {Tag} from "$lib/data/stores/global.ts"
  export let data: Tag
</script>

<div 
  class="font-bold rounded-full px-2 flex flex-col items-center"
  style="background-color: #{data.color}">
  <span class="text-xs">{data.label}</span>
</div>
