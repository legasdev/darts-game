<script>
    export let title;
</script>

<header class="header">
    <h1 class="title">{title}</h1>
</header>

<style>
    .header {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 3.875rem;
        border-bottom: 1px solid var(--color-grey-100);
    }

    .title {
        margin: 0 auto 3rem;
        font-size: 2.25rem;
        text-align: center;
    }
</style>