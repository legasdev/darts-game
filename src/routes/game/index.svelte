<script>
    import {gameData} from "../../stores/app";
    import PageTitle from "../_components/PageTitle.svelte";
    import SettingsBlock from "../_components/SettingsBlock.svelte";
    import SectionTitle from "../_components/SectionTitle.svelte";
    import InputText from "../_components/ui/InputText.svelte";
    import ColorPicker from "../_components/ui/ColorPicker.svelte";

    let colorValue = '#1c63ec';

    function inputBlur(event) {
        const
            value = event.target.value;

        if ( !value ) return;

        console.log('event', event)
        console.log('event value', value)
        console.log('event value length', value.length)
    }
</script>


<svelte:head>
    <title>{$gameData ? 'Игра' : 'Подготовка к игре'} / Darts Game</title>
</svelte:head>

<PageTitle title={$gameData ? 'Игра' : 'Подготовка к игре'} />
<main>
    <SettingsBlock>
        <SectionTitle title="Игроки" info={{
            text: 'Мин. участников: 2',
        }} />
        <div class="input-block">
            <InputText
                id="userName"
                placeholder="Имя игрока"
                on:blur={inputBlur}
            />
            <ColorPicker
                id="userColor"
                style="margin-left: 38px;"
                bind:value={colorValue}
            />
        </div>
    </SettingsBlock>
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 436px;
        margin: 0 auto;
    }

    .input-block {
        display: flex;
        align-items: center;
        width: 100%;
    }
</style>