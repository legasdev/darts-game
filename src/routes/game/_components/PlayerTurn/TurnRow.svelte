<script>
    import { createEventDispatcher } from 'svelte';

    import InputNumber from "../../../_components/ui/InputNumber.svelte";
    import InputRadio from "../../../_components/ui/InputRadio.svelte";

    const dispatch = createEventDispatcher();

    const MAX_POINTS = 50;

    export let id = 0;
    export let title = "";
    export let inputValue = 0;
    export let result = 0;
    export let multiplier = 1;

    $: {
        dispatch('inputValue', {
            id,
            value: inputValue > MAX_POINTS ? MAX_POINTS : inputValue,
        });
    }
</script>


<div class="wrapper">
    <span class="title">{title}</span>
    <div class="row">
        <div class="input-wrapper">
            <InputNumber min={0} max={MAX_POINTS} bind:value={inputValue} />
        </div>
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

    .input-wrapper {
        display: inline-block;
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

    @media screen and (max-width: 480px) {
        .row {
            grid-template-columns: 0.85fr 1fr;
            grid-template-rows: auto auto;
            row-gap: 0.25rem;
        }

        .input-wrapper {
            grid-column: 1 / 3;
        }

        .result {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            text-align: left;
        }

        .multipliers {
            grid-row: 2 / 3;
            grid-column: 2 / 3;
        }
    }
</style>