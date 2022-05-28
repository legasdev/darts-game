<script>
    export let isActive = false;
</script>


<div class="row">
    <div class="row_lamp" class:row_lamp--enabled={isActive}></div>
    <slot></slot>
</div>


<style>
    .row {
        display: grid;
        grid-template-columns: 0.875rem 3rem 1fr 1fr 0.5fr;
        grid-template-rows: auto;
        column-gap: 1.75rem;
        align-items: center;
        width: 100%;
    }

    .row_lamp {
        width: 0.875rem;
        height: 0.875rem;
        border-radius: 3px;
        background: transparent;
        transition: background .1s;
    }

    .row_lamp--enabled {
        background: var(--color-grey-400);
    }

    @media screen and (max-width: 480px) {
        .row {
            grid-template-columns: 0.875rem 3rem 1fr 0.25fr 0.5fr;
            column-gap: 1rem;
        }
    }
</style>