<script>
    import { gameData } from "$lib/stores/app";

    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import PlayersTable from "./_components/PlayersTable/PlayersTable.svelte";

    export let gameTypes;

    let players = getPlayersFromGameData();

    $: players = getPlayersFromGameData();

    function getPlayersFromGameData() {
        return $gameData.players;
    }

    console.log('gameData', $gameData);
    console.log('players', players)
</script>


<SectionBlock>
    <SectionTitle title="Игровая таблица" />
    <PlayersTable {players} />
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Играет" info={{
        title: 'Артем'
    }} />
</SectionBlock>

<SectionBlock>
    <SectionTitle title="Очков за раунд" info={{
        title: 60
    }} />
</SectionBlock>