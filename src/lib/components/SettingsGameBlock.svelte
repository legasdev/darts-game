<script>
    import Select from "$lib/components/ui/ButtonDefault/Select.svelte";
    import InputNumber from "$lib/components/ui/InputNumber.svelte";

    export let settings;
    export let gameSettings;
</script>


{#if settings}
    {#each settings as option (option.id)}
        {#if option.type === 'select' }
            <Select
                id={option.id}
                label={option.name}
                list={option.options}
                style="margin-bottom: 32px;"
                bind:value={gameSettings[option.id]}
            />
        {:else if option.type === 'number'}
            <InputNumber
                id={option.id}
                label={option.name}
                min={option.min}
                max={option.max}
                bind:value={gameSettings[option.id]}
            />
        {/if}
    {/each}
{/if}