<script>
    import { goto } from "$app/navigation";

    import { gameData } from "$lib/stores/app";

    import PageTitle from "$lib/components/PageTitle.svelte";

    import Game from "./Game.svelte";
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    {#if $gameData}
        <Game />
    {:else}
        {goto('/game/settings/')}
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