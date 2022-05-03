<script>
    import {gameData} from "../../stores/app";
    import PageTitle from "../_components/PageTitle.svelte";
    import SettingsBlock from "../_components/SettingsBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    <SettingsBlock>
        <SectionTitle title="Игроки" />
        <div>body</div>
    </SettingsBlock>
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