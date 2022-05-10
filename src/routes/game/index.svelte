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
    import { gameData, players } from "$lib/stores/app";

    import PageTitle from "../_components/PageTitle.svelte";
    import SettingsBlock from "../_components/SettingsBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayerRowPreview from "../_components/PlayerRowPreview.svelte";
    import AddPlayer from "../_components/AddPlayer.svelte";
    import ButtonDefault from "../_components/ui/ButtonDefault/index.svelte";
    import Select from "../_components/ui/ButtonDefault/Select.svelte";
    import InputNumber from "../_components/ui/InputNumber.svelte";


    export let gameTypes;

    let selectedGameId = gameTypes[0].id;
    let isEnoughPlayers = false;
    let selectedGame = findSelectedGame(gameTypes, selectedGameId);
    let gameSettings = reduceSettingsStructure(selectedGame.settings);


    $: isEnoughPlayers = $players?.length > 1;
    $: selectedGame = findSelectedGame(gameTypes, selectedGameId);



    function reduceSettingsStructure(settings) {
        return settings.reduce((obj, option) => ({
            ...obj,
            [option.id]: option.default,
        }), {});
    }

    function findSelectedGame(gamesList, gameId) {
        return gamesList.find(game => game.id === gameId);
    }

    function handleStartGame() {
        console.log('gameSettings', gameSettings)
    }
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    <SettingsBlock>
        <SectionTitle title="Игроки" info={{
            text: isEnoughPlayers ? '' : 'Мин. участников: 2',
            title: $players?.length
        }} />
        {#if $players}
            {#each $players as player (player.id)}
                <PlayerRowPreview player={player} />
            {/each}
        {/if}
        <AddPlayer />
    </SettingsBlock>

    <SettingsBlock>
        <SectionTitle title="Тип игры" info={{
            text: 'Правила',
            href: selectedGame.rules,
        }} />
        <Select id="gameType" list={gameTypes} bind:value={selectedGameId} />
    </SettingsBlock>

    <SettingsBlock>
        <SectionTitle title="Настройки" />
        {#each selectedGame.settings as option (option.id)}
            {#if option.type === 'select' }
                <Select
                    id={option.id}
                    label={option.name}
                    list={option.options}
                    style="margin-bottom: 32px;"
                    bind:value={gameSettings[option.id]}
                />
            {:else if option.type === 'number'}
                <InputNumber
                    id={option.id}
                    label={option.name}
                    min={option.min}
                    max={option.max}
                    bind:value={gameSettings[option.id]}
                />
            {/if}
        {/each}
    </SettingsBlock>

    <ButtonDefault
        value="Начать игру"
        style="min-width: 230px"
        disabled={!isEnoughPlayers}
        on:click={handleStartGame}
    />
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