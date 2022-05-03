<div class="page-wrapper">
    <slot />
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500&display=swap');

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Exo 2', sans-serif;

        --color-grey: #E6E6E6;
        --color-grey-dark: #878787;
        --color-dark: #2B2B2B;
        --color-red: #E73333;

        --color-font: #2B2B2B;
    }

    :global(body) {
        position: relative;
        height: 100vh;
        padding: 3rem 1rem;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: 'Cormorant Unicase', serif;
        font-weight: 300;
        color: var(--color-font);
    }

    .page-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 584px;
        margin: 0 auto;
    }
</style>