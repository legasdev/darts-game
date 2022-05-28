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
    import { gameData, players } from "$lib/stores/app";

    import SectionBlock from "$lib/components/SectionBlock.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import PlayerRowPreview from "$lib/components/PlayerRowPreview.svelte";
    import AddPlayer from "$lib/components/AddPlayer.svelte";
    import Select from "$lib/components/ui/ButtonDefault/Select.svelte";
    import SettingsGameBlock from "$lib/components/SettingsGameBlock.svelte";
    import ButtonDefault from "$lib/components/ui/ButtonDefault/index.svelte";


    export let gameTypes = [];

    let selectedGameId = gameTypes[0]?.id;
    let isEnoughPlayers = false;
    let selectedGame = findSelectedGame(gameTypes, selectedGameId);
    let gameSettings = reduceSettingsStructure(selectedGame?.settings);

    $: isEnoughPlayers = $players?.length > 1;
    $: selectedGame = findSelectedGame(gameTypes, selectedGameId);


    function reduceSettingsStructure(settings) {
        return settings?.reduce((obj, option) => ({
            ...obj,
            [option.id]: option.default,
        }), {});
    }

    function findSelectedGame(gamesList, gameId) {
        return gamesList?.find(game => game.id === gameId);
    }

    function handleStartGame() {
        const
            selectedSettings = selectedGame?.settings.map(({id}) => id),

            settingsObject = selectedSettings?.reduce((obj, option) => (
                {
                    ...obj,
                    [option]: gameSettings[option] || null,
                }), {}),

            playerStartInfo = Object.keys(settingsObject).reduce((info, key) => {
                const settingInfo = selectedGame.settings.find(({ id }) => id === key);

                // TODO: Need to refactor this
                if (settingInfo.type === 'number') return info;

                return {
                    ...info,
                    [settingInfo.forInfo]: settingInfo.options.find(({ id }) => id === settingsObject[key]).value,
                };
            }, {}),

            gameDataObject = {
                id: Date.now(),
                gameId: selectedGameId,
                settings: settingsObject,
                players: $players?.map(player => ({
                    ...player,
                    ...selectedGame.playersInitialData,
                    ...playerStartInfo,
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
            href: selectedGame?.rules,
        }} />
    <Select id="gameType" list={gameTypes} bind:value={selectedGameId} />
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Настройки" />
    <SettingsGameBlock settings={selectedGame?.settings} {gameSettings} />
</SectionBlock>

<ButtonDefault
    value="Начать игру"
    style="min-width: 230px"
    disabled={!isEnoughPlayers}
    on:click={handleStartGame}
/>