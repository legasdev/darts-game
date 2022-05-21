<script>
    import { gameData } from "$lib/stores/app";

    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayersTable from "./_components/PlayersTable/PlayersTable.svelte";
    import PlayerTurn from "./_components/PlayerTurn/PlayerTurn.svelte";
    import ButtonDefault from "../_components/ui/ButtonDefault/index.svelte";

    function getPlayersFromGameData(gameData) {
        return gameData?.players || [];
    }

    function getPlayerIdInTurn(playersList) {
        return playersList.find(({ isTurn }) => isTurn)?.id;
    }

    function getPlayerNameInTurn(players, playedId) {
        return players.find(({ id }) => id === playedId)?.name || '';
    }

    let
        players = getPlayersFromGameData($gameData),
        playerIdInTurn = getPlayerIdInTurn(players),
        playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn),
        turnResult = 0;

    $: {
        players = getPlayersFromGameData($gameData);
        playerIdInTurn = getPlayerIdInTurn(players);
        playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn);
    }
</script>


<SectionBlock>
    <SectionTitle title="Игровая таблица" />
    <PlayersTable {players} {playerIdInTurn} />
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Играет" info={{
        title: playerNameInTurn
    }} />
    <PlayerTurn
        {players}
        playerId={playerIdInTurn}
        bind:result={turnResult}
    />
</SectionBlock>

<SectionBlock style="margin-bottom: 58px;">
    <SectionTitle title="Очков за раунд" info={{
        title: turnResult
    }} />
</SectionBlock>

<ButtonDefault
    value="Следующий игрок"
    style="min-width: 230px"
/>