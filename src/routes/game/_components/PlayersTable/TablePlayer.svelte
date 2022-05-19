<script>
    import UserFirstLetterOnColor from "../../../_components/ui/UserFirstLetterOnColor.svelte";

    export let player;

    const { name, color, roundsWon, score } = player;
</script>

<UserFirstLetterOnColor {color} {name} />
<span class="text">{name}</span>
<span class="text">{roundsWon}</span>
<span class="text text--align-right">{score}</span>


<style>
    .text {
        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        color: var(--color-font);
    }

    .text--align-right {
        text-align: right;
    }
</style>