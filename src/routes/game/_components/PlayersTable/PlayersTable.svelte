<script>
    import TableRow from "./TableRow.svelte";
    import TableHeader from "./TableHeader.svelte";

    export let players = [];
</script>


<div class="table">
    <TableRow>
        <TableHeader />
    </TableRow>
    {#each players as player (player.id)}
        <div></div>
    {/each}
</div>


<style>
    .table {
        display: grid;
        grid-auto-rows: auto;
        width: 100%;
    }


</style>