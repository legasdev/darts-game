<script>
    export let id = Math.random();
    export let label = null;
    export let min = 0;
    export let max = 1;
    export let value = min;
    export let style = "";

    let inputElement;

    $: {
        value = +value > max
            ? max
            : +value;

        if ( inputElement ) {
            inputElement.value = value;
        }
    }
</script>


<div class="input-wrapper" {style}>
    {#if label}
        <label for={id}>{label}</label>
    {/if}
    <input
        id={id}
        type="number"
        {max}
        {min}
        bind:value
        bind:this={inputElement}
    />
</div>


<style>
    .input-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input {
        max-height: 3rem;
        padding: 0.75em 0.75em 0.875em;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        border: 1px solid var(--color-grey-200);
        border-radius: 0.188rem;
    }

    label {
        font-family: 'Exo 2', sans-serif;
        color: var(--color-font);
        margin-bottom: 0.375rem;
        padding-left: 0.25rem;
    }

    @media screen and (max-width: 480px) {
        .input-wrapper {
            margin-bottom: 0.5rem;
        }
    }
</style>