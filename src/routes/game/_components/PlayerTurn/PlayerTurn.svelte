<script>
    import { gameData } from "$lib/stores/app";

    import TurnRow from "./TurnRow.svelte";

    export let players;
    export let playerId;
    export let result = 0;

    const stepsList = [
        {id: "1", name: "Первый бросок"},
        {id: "2", name: "Второй бросок"},
        {id: "3", name: "Третий бросок"},
    ];

    let infoByTurn = players.find(({ id }) => id === playerId ).turn;
    let inputValues = infoByTurn.map(({ value }) => value);
    let values =[0, 0, 0];
    let multipliers = infoByTurn.map(({ multiple }) => multiple);

    $: {
        result = values.reduce((sum, value) => sum + value, 0);
        console.log('values changed', inputValues);
        console.log('multipliers changed', multipliers);
        console.log('result changed', result);

        gameData.updatePlayerTurn(playerId, inputValues, multipliers);
    }
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