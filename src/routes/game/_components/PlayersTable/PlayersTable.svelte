<script>
    import TableRow from "./TableRow.svelte";
    import TableHeader from "./TableHeader.svelte";
    import TablePlayer from "./TablePlayer.svelte";

    export let players = [];
    export let playerIdInTurn;
</script>


<div class="table">
    <TableRow>
        <TableHeader />
    </TableRow>
    {#each players as player (player.id)}
        <TableRow isActive={playerIdInTurn === player.id}>
            <TablePlayer {player} />
        </TableRow>
    {/each}
</div>


<style>
    .table {
        display: grid;
        grid-auto-rows: auto;
        row-gap: 28px;
        width: 100%;
    }


</style>