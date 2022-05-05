<script>
    export let id = Math.random();
    export let label;
    export let placeholder = '';
</script>


<div class="input-wrapper" >
    {#if label}
        <label class="label" for={id}>{label}</label>
    {/if}
    <input
        id={id}
        type="text"
        placeholder={placeholder}
        aria-placeholder={placeholder}
        on:blur
    />
</div>

<style>
    .input-wrapper {
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

    input {
        max-height: 3rem;
        padding: 0.75em 0.75em 0.875em;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        border: 1px solid var(--color-grey-200);
        border-radius: 0.188rem;
    }

    input::placeholder {
        font-family: 'Exo 2', sans-serif;
        color: var(--color-grey-300);
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
    }
</style>