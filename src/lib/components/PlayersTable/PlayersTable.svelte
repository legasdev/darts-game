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
    {#each players as { id, name, color, roundsWon, score } (id)}
        <TableRow isActive={playerIdInTurn === id}>
            <TablePlayer {name} {color} {roundsWon} {score} />
        </TableRow>
    {/each}
</div>


<style>
    .table {
        display: grid;
        grid-auto-rows: auto;
        row-gap: 1.5rem;
        width: 100%;
    }
</style>