<script>
    import { gameData, players } from "$lib/stores/app";

    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayerRowPreview from "../_components/PlayerRowPreview.svelte";
    import AddPlayer from "../_components/AddPlayer.svelte";
    import Select from "../_components/ui/ButtonDefault/Select.svelte";
    import SettingsGameBlock from "../_components/SettingsGameBlock.svelte";
    import ButtonDefault from "../_components/ui/ButtonDefault/index.svelte";


    export let gameTypes;

    let selectedGameId = gameTypes[1].id;
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
        const
            selectedSettings = selectedGame.settings.map(({id}) => id),

            gameDataObject = {
                id: Date.now(),
                gameId: selectedGameId,
                settings: selectedSettings.reduce((obj, option) => (
                        {
                            ...obj,
                            [option]: gameSettings[option] || null,
                        })
                    , {}),
                players: $players.map(player => ({
                    ...player,
                    ...selectedGame.playersInitialData,
                })),
            };

        gameData.set(gameDataObject);
    }
</script>


<SectionBlock>
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
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Тип игры" info={{
            text: 'Правила',
            href: selectedGame.rules,
        }} />
    <Select id="gameType" list={gameTypes} bind:value={selectedGameId} />
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Настройки" />
    <SettingsGameBlock settings={selectedGame.settings} {gameSettings} />
</SectionBlock>

<ButtonDefault
        value="Начать игру"
        style="min-width: 230px"
        disabled={!isEnoughPlayers}
        on:click={handleStartGame}
/>