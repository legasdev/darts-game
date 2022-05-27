<script>
    import SectionBlock from "../_components/SectionBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";

    import { gameData } from "$lib/stores/app";

    $: winnerPlayer = $gameData.forEach(player => console.log(player))
    
</script>


<SectionBlock>
    <SectionTitle title="Игроки" />
    <div>Победил: Игрок</div>
</SectionBlock>