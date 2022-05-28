<script context="module">
    import { randomHex } from "$lib/utils/randomHex.js";
</script>

<script>
    import { players } from "$lib/stores/app";

    import ColorPicker from "$lib/components/ui/ColorPicker.svelte";
    import InputText from "$lib/components/ui/InputText.svelte";

    let nameValue = '';
    let colorValue = `#${randomHex()}`;

    function addPlayer() {
        if ( !nameValue ) return;

        players.add(nameValue, colorValue);
        nameValue = '';
        colorValue = `#${randomHex()}`;
    }
</script>


<div class="input-block">
    <InputText
            id="userName"
            placeholder="Имя игрока"
            bind:value={nameValue}
    />
    <div class="input-block_ui">
        <ColorPicker
            id="userColor"
            bind:value={colorValue}
        />
        <button class="input-block_add" on:click={addPlayer}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4817 15.3479L18.8996 8.06984" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.10983 10.7586L11.4316 15.3" stroke="#2B2B2B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>


<style>
    .input-block {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .input-block_ui {
        display: flex;
        align-items: center;
        margin-left: 2.375rem;
    }

    .input-block_add {
        min-width: 1.5rem;
        min-height: 1.5rem;
        max-width: 1.5rem;
        max-height: 1.5rem;
        margin-left: 2.375rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        .input-block {
            flex-direction: column;
            align-items: flex-start;
        }

        .input-block_ui {
            margin-left: 0;
        }
    }
</style>