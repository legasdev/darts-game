<script>
    import { players } from "$lib/stores/app";
    import UserFirstLetterOnColor from "./ui/UserFirstLetterOnColor.svelte";

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
        <UserFirstLetterOnColor {color} {name} />
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