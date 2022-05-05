import { writable } from "svelte/store";

import {LS_NAMES} from "../../lib/constants/index.js";


function createGameData() {
    const gameData = localStorage && localStorage.getItem(LS_NAMES.gameData);

    const { subscribe, set, update } = writable(gameData);

    return {
        subscribe,
        set,
        update
    };
}


export const gameData = createGameData();