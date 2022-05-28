<script>
    import ButtonWrapper from "./ButtonWrapper.svelte";

    export let value='';
    export let style={};
    export let isLink='';
    export let disabled = false;
</script>


<ButtonWrapper {style} {isLink} {disabled} on:click>
    <span class="wrapper">
        <span class="value-text">{value}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg-line" d="M8.85083 19.1988L16.2686 11.9206" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="svg-line" d="M8.85083 4.90973L16.2686 11.9205" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
</ButtonWrapper>


<style>
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .value-text {
        font-family: 'Exo 2', sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-font);
        text-decoration: none;
    }

    .svg-line {
        stroke: var(--color-dark);
    }
</style>