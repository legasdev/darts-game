
<script>
    import {gameData} from "../stores/app";

    import PageTitle from "./_components/PageTitle.svelte";
    import ButtonDefault from "./_components/ui/ButtonDefault/index.svelte";
    import Footer from "./_components/Footer.svelte";
    import Link from "./_components/ui/Link.svelte";
</script>


<svelte:head>
    <title>Darts Game</title>
</svelte:head>

<div class="center-block">
    <PageTitle title="Дартс" />
    <main>
        <ButtonDefault
            value="Начать игру"
            style='min-width: 230px;'
            isLink="/game"
        />
        {#if $gameData}
            <div class="save-game-block">
                <Link href="/game" value="Продолжить сохраненную игру" />
            </div>
        {/if}
    </main>
</div>
<Footer />

<style>
    .center-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 128px;
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