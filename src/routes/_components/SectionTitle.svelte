<script>
    export let title = "";
    export let info = {
        title: null,
        text: null,
        href: null,
    };
</script>


<header>
    <div class="title">
        <h2>{title}</h2>
        {#if info.title}
            <span class="title-add-text">/ {info.title}</span>
        {/if}
    </div>
    {#if info.href}
        <a class="link"
           href={info.href}
           target="_blank"
           rel="noopener noreferrer"
        >{info.text}</a>
    {:else if info.text}
        <span class="link">{info.text}</span>
    {/if}
</header>


<style>
    header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 2rem;
    }

    .title {
        display: flex;
        align-items: baseline;
    }

    .title-add-text {
        margin-left: 0.75rem;
        font-family: 'Cormorant Unicase', serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: var(--color-grey-400);
    }

    .link {
        color: var(--color-red-200);
        font-style: normal;
        font-weight: 200;
        font-size: 0.875rem;
        line-height: 1.063rem;
        text-align: right;
        text-decoration: none;
    }

    @media screen and (max-width: 480px) {
        header {
            flex-direction: column;
            align-items: flex-start;
        }

        .title {
            margin-bottom: 0.5rem;
        }
    }
</style>