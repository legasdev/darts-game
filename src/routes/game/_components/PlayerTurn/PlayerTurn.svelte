<script>
    import { afterUpdate } from "svelte";
    import { gameData } from "$lib/stores/app";

    import TurnRow from "./TurnRow.svelte";

    export let players;
    export let playerId;
    export let result = 0;

    // TODO: May be fix this?
    let prevPlayerId = playerId;

    const stepsList = [
        {id: "1", name: "Первый бросок"},
        {id: "2", name: "Второй бросок"},
        {id: "3", name: "Третий бросок"},
    ];

    let infoByTurn = players.find(({ id }) => id === playerId )?.turn || [];
    let inputValues = infoByTurn.map(({ value }) => value);
    let values = [0, 0, 0];
    let multipliers = infoByTurn.map(({ multiple }) => multiple);

    $: {
        result = values.reduce((sum, value) => sum + value, 0);
        gameData.updatePlayerTurn(playerId, inputValues, multipliers);
    }

    afterUpdate(() => {
        if ( prevPlayerId !== playerId ) {
            console.log('UPDATED')
            prevPlayerId = playerId;
            values = inputValues = [0, 0, 0];
            multipliers = [1, 1, 1];
        }
    });
</script>


<div class="player-turn">
    {#each stepsList as step, index (step.id)}
        <TurnRow
            title={step.name}
            bind:inputValue={inputValues[index]}
            bind:result={values[index]}
            bind:multiplier={multipliers[index]}
        />
    {/each}
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