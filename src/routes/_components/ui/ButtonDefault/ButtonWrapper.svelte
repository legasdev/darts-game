<script>
    export let style={};
    export let isLink='';
</script>

{#if isLink}
    <a href={isLink} class="button" on:click style={style}>
        <slot/>
    </a>
{:else}
    <button class="button" on:click style={style}>
        <slot/>
    </button>
{/if}


<style>
    .button {
        padding: 0.875rem 1.125rem;
        background-color: transparent;
        border: 1px solid var(--color-red-100);
        border-radius: 0.188rem;
        cursor: pointer;
        text-decoration: none;
    }
</style>