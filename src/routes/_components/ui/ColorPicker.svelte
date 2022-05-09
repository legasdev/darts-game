<script>
    export let id = Math.random();
    export let style = "";
    export let value;
</script>

<div class="wrapper" style={style}>
    <input id={id} type="color" bind:value />
</div>


<style>
    .wrapper {
        position: relative;
        min-width: 3rem;
        min-height: 3rem;
        overflow: hidden;
        border-radius: 0.188rem;
    }

    input {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 120%;
        height: 120%;
        background-color: transparent;
        appearance: none;
        border: none;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
</style>