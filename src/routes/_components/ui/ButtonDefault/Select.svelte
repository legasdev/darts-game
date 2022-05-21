<script>
    export let id = Math.random();
    export let label = null;
    export let list = [];
    export let value;
    export let style = "";
</script>


<div class="input-wrapper" {style}>
    {#if label}
        <label class="label" for={id}>{label}</label>
    {/if}
    <select id={id} bind:value>
        {#if list}
            {#each list as item (item.id)}
                <option value={item.id}>{item.name}</option>
            {/each}
        {/if}
    </select>
    <svg class="input_arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" fill="white"/>
        <path d="M19.5076 18L26.7857 25.4178" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.7966 18L26.7858 25.4178" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div>


<style>
    .input-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        font-family: 'Exo 2', sans-serif;
        color: var(--color-font);
        margin-bottom: 0.375rem;
        padding-left: 0.25rem;
    }

    select {
        max-height: 3rem;
        padding: 0.55em 0.75em 0.675em;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        border: 1px solid var(--color-grey-200);
        border-radius: 0.188rem;
        background: transparent;
    }

    .input_arrow {
        position: absolute;
        right: 2px;
        bottom: 2px;
        pointer-events: none;
    }
</style>