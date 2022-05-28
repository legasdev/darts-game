<script>
    export let style = {};
    export let isLink = '';
    export let disabled = false;
</script>

{#if isLink}
    <a class="button" href={isLink} on:click {style}>
        <slot/>
    </a>
{:else}
    <button class="button" {disabled} on:click {style}>
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

    .button:disabled {
        border: 1px solid var(--color-grey-100);
        cursor: not-allowed;
    }
</style>