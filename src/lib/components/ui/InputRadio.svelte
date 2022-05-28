<script>
    export let group;
    export let value;
</script>


<label>
    <input
        type="radio"
        bind:group
        {value}
    />
    <slot></slot>
</label>


<style>
    input {
        display: none;
    }
</style>