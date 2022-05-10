<script>
    import { players } from "$lib/stores/app";

    export let player = {
        id: null,
        name: null,
        color: null
    };

    const { id, name, color } = player;

    function handleClickRemove() {
        players.remove(id);
    }
</script>


<div class="user">
    <span class="user_name">{name}</span>
    <div class="user_ui">
        <div class="user_color" style:background={color}>
            <span class="user_first-letter">{name[0].toString().toUpperCase()}</span>
        </div>
        <button on:click={handleClickRemove}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.21948L16 15.7805" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 8.21948L8.00001 15.7805" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>


<style>
    .user {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 1.5rem;
    }

    .user_ui {
        display: flex;
        align-items: center;
        margin-left: 2.375rem;
    }

    .user_name {
        max-height: 3rem;
        padding: 0.75em 0.75em 0.875em;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.375rem;
        border-radius: 0.188rem;
        width: 100%;
    }

    .user_color {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        min-height: 3rem;
        border-radius: 0.188rem;
    }

    .user_first-letter {
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.813rem;
        color: var(--color-grey-100);
    }

    button {
        background-color: transparent;
        border: none;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 2.375rem;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        .user {
            align-items: flex-start;
            flex-direction: column;
        }

        .user_name {
            margin-bottom: 0.5rem;
            padding-left: 0;
        }

        .user_ui {
            margin-left: 0;
        }
    }
</style>