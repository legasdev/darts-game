<script>
    import TurnRow from "./TurnRow.svelte";

    export let values = [0, 0, 0];
    export let multipliers = [0, 0, 0];
    export let result = 0;

    $: result = values.reduce((sum, value) => sum + value, 0);
</script>


<div class="player-turn">
    <TurnRow
        title="Первый бросок"
        bind:result={values[0]}
        bind:multipliers={multipliers[0]}
    />
    <TurnRow
        title="Второй бросок"
        bind:result={values[1]}
        bind:multipliers={multipliers[1]}
    />
    <TurnRow
        title="Третий бросок"
        bind:result={values[2]}
        bind:multipliers={multipliers[2]}
    />
</div>


<style>
    .player-turn {
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: auto;
        row-gap: 2rem;
        width: 100%;
    }
</style>