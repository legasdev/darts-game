<script>
    import InputNumber from "../../../_components/ui/InputNumber.svelte";
    import InputRadio from "../../../_components/ui/InputRadio.svelte";

    export let title = "";
    export let inputValue = 0;
    export let result = 0;
    export let multiplier = 1;

    const id = Math.random();

    $: result = inputValue * multiplier;
</script>


<div class="wrapper">
    <span class="title">{title}</span>
    <div class="row">
        <InputNumber min={0} max={20} bind:value={inputValue} />
        <div class="multipliers">
            <InputRadio
                bind:group={multiplier}
                value={1}
            >
                <span
                    class="result multiple-name"
                    class:multiple-name--select={multiplier === 1}
                >x1</span>
            </InputRadio>
            <InputRadio
                bind:group={multiplier}
                value={2}
            >
                <span
                    class="result multiple-name"
                    class:multiple-name--select={multiplier === 2}
                >x2</span>
            </InputRadio>
            <InputRadio
                bind:group={multiplier}
                value={3}
            >
                <span
                    class="result multiple-name"
                    class:multiple-name--select={multiplier === 3}
                >x3</span>
            </InputRadio>
        </div>
        <span class="result">{result}</span>
    </div>
</div>


<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .title {
        padding-left: 0.25rem;
        margin-bottom: 0.375rem;
        font-style: normal;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.188rem;
        color: var(--color-font);
    }

    .row {
        display: grid;
        grid-template-columns: 170px 150px 1fr;
        grid-template-rows: auto;
        column-gap: 2rem;
        align-items: center;
        width: 100%;
    }

    .result {
        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        text-align: right;
        color: var(--color-font);
    }

    .multipliers {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .multiple-name {
        padding: 0 4px 2px;
        cursor: pointer;
    }

    .multiple-name--select {
        color: var(--color-red-200);
    }
</style>