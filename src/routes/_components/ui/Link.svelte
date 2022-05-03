<script>
    export let href="/";
    export let value="";
</script>


<a class="link" href={href}>{value}</a>


<style>
    .link {
        color: var(--color-grey-dark);
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.063em;
    }
</style>