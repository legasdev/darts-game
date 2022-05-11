<script context="module">
    export async function load({ fetch }) {
        const gameTypes = await (await fetch(`/game/gameTypes.json`)).json();

        return {
            props: {
                gameTypes
            },
        };
    }
</script>

<script>
    import { gameData } from "$lib/stores/app";

    import PageTitle from "../_components/PageTitle.svelte";
    import SettingsGame from "./SettingsGame.svelte";

    export let gameTypes;
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    {#if $gameData}
        <div>Игра</div>
    {:else}
        <SettingsGame {gameTypes} />
    {/if}
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 436px;
        margin: 0 auto;
    }
</style>