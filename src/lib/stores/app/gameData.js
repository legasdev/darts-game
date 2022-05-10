import { writable } from "svelte/store";

import {LS_NAMES} from "../../constants/index.js";


function getLocalData() {
    try {
        return localStorage.getItem(LS_NAMES.gameData);
    } catch (error) {
        return null;
    }
}


function createGameData() {
    const gameData = getLocalData();

    const { subscribe, set, update } = writable(gameData);

    return {
        subscribe,
        set,
        update
    };
}


export const gameData = createGameData();