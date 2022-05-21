<script>
    import { base } from '$app/paths';
    import { gameData } from "$lib/stores/app";

    import PageTitle from "./_components/PageTitle.svelte";
    import ButtonDefault from "./_components/ui/ButtonDefault/index.svelte";
    import Footer from "./_components/Footer.svelte";
    import Link from "./_components/ui/Link.svelte";


    function handleClickNewGame() {
        gameData.newGame();
    }
</script>


<svelte:head>
    <title>Darts Game</title>
</svelte:head>

<div class="center-block">
    <div class="wrapper">
        <PageTitle title="Дартс" />
        <main>
            <ButtonDefault
                value="Начать игру"
                style="min-width: 230px;"
                on:click={handleClickNewGame}
                isLink={`${base}/game/`}
            />
            {#if $gameData}
                <div class="save-game-block">
                    <Link href={`${base}/game/`} value="Продолжить сохраненную игру" />
                </div>
            {/if}
        </main>
    </div>
    <Footer />
</div>

<style>
    .center-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding-top: 128px;
    }

    .wrapper {
        width: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 436px;
        margin: 0 auto;
    }

    .save-game-block {
        margin-top: 3rem;
    }
</style>