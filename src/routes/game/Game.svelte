<script>
    import { gameData } from "$lib/stores/app";

    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayersTable from "./_components/PlayersTable/PlayersTable.svelte";
    import PlayerTurn from "./_components/PlayerTurn/PlayerTurn.svelte";
    import ButtonDefault from "../_components/ui/ButtonDefault/index.svelte";
    import InputNumber from "../_components/ui/InputNumber.svelte";

    function getPlayersFromGameData(gameData) {
        return gameData?.players || [];
    }

    function getPlayerIdInTurn(playersList) {
        return playersList.find(({ isTurn }) => isTurn)?.id;
    }

    function getPlayerNameInTurn(players, playerId) {
        return players.find(({ id }) => id === playerId)?.name || '';
    }

    function getPlayerById(playerId) {
        return players.find(({ id }) => id === playerId);
    }

    let
        players = getPlayersFromGameData($gameData) || [],
        playerIdInTurn = getPlayerIdInTurn(players) || "",
        playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn) || "",
        playerScore = getPlayerById(playerIdInTurn)?.score || 0,
        turnResult = 0;

    $: {
        players = getPlayersFromGameData($gameData);
        playerIdInTurn = getPlayerIdInTurn(players);
        playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn);
        playerScore = getPlayerById(playerIdInTurn)?.score || 0;
    }

    function handleClickNextPlayer() {
        gameData.nextPlayer(playerIdInTurn, turnResult);
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
        title: `Осталось: ${playerScore - turnResult}`,
    }} />
    <InputNumber
        id="player-turn-result"
        min={0}
        max={180}
        bind:value={turnResult}
    />
</SectionBlock>

<ButtonDefault
    value="Следующий игрок"
    style="min-width: 230px"
    on:click={handleClickNextPlayer}
/>