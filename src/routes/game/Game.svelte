<script>
    import { gameData } from "$lib/stores/app";

    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayersTable from "./_components/PlayersTable/PlayersTable.svelte";
    import PlayerTurn from "./_components/PlayerTurn/PlayerTurn.svelte";
    import ButtonDefault from "../_components/ui/ButtonDefault/index.svelte";

    export let gameTypes;

    function getPlayersFromGameData(gameData) {
        return gameData?.players || [];
    }

    function getPlayerIdInTurn(playersList) {
        return playersList.find(({ isTurn }) => isTurn)?.id;
    }

    function getPlayerNameInTurn(players, playedId) {
        return players.find(({ id }) => id === playedId)?.name || '';
    }

    let players = getPlayersFromGameData($gameData);
    let playerIdInTurn = getPlayerIdInTurn(players);
    let playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn);
    let turnResult = 0;

    $: {
        players = getPlayersFromGameData($gameData);
        console.log(`Информация об игре обновилась:`, $gameData);
        console.log(`Игроки:`, players);
    }
    $: playerIdInTurn = getPlayerIdInTurn(players);
    $: {
        playerNameInTurn = getPlayerNameInTurn(players, playerIdInTurn);
        console.log(`Ход игрока: ${playerIdInTurn}:${playerNameInTurn}`);
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
    <PlayerTurn bind:result={turnResult} />
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