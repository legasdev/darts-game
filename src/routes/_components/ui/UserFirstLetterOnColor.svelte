<script>
    export let color = "#FFFFFF";
    export let name = "";
</script>


<div class="user_color" style:background={color}>
    <span class="user_first-letter">{name[0].toString().toUpperCase()}</span>
</div>


<style>
    .user_color {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        min-height: 3rem;
        border-radius: 0.188rem;
    }

    .user_first-letter {
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.813rem;
        color: var(--color-grey-100);
    }
</style>