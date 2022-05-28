<script>
    import { gameData } from "$lib/stores/app";

    import SectionBlock from "$lib/components/SectionBlock.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";

    $: winnerPlayer = $gameData.forEach(player => console.log(player))
    
</script>


<SectionBlock>
    <SectionTitle title="Игроки" />
    <div>Победил: Игрок</div>
</SectionBlock>