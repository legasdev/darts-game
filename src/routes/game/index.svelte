<script context="module">
    import { base } from '$app/paths';

    export async function load({ fetch }) {
        try {
            const response = await fetch(`${base}/game/gameTypes.json`);

            return {
                props: {
                    gameTypes: await response.json(),
                },
            };
        } catch (error) {
            console.error(error);
            return [];
        }
    }
</script>

<script>
    import { gameData } from "$lib/stores/app";

    import PageTitle from "../_components/PageTitle.svelte";
    import SettingsGame from "./SettingsGame.svelte";
    import Game from "./Game.svelte";

    export let gameTypes;
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    {#if $gameData}
        <Game />
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