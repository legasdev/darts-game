import { writable } from "svelte/store";
import { browser } from "$app/env"

import { LS_NAMES } from "$lib/constants/index.js";


function getLocalData() {
    try {
        if ( !browser ) return {};

        const gameData = localStorage.getItem(LS_NAMES.gameData);
        return gameData ? JSON.parse(gameData) : gameData;
    } catch (error) {
        console.error(error);
        return null;
    }
}


function createGameData() {
    const gameData = getLocalData();

    const { subscribe, set: storeSet, update } = writable(gameData);

    function saveDataToLocalStorage(infoByGameData) {
        if ( !infoByGameData || !browser ) return;

        localStorage.setItem(LS_NAMES.gameData, JSON.stringify(infoByGameData));
    }

    function set(data) {
        storeSet(data);
        saveDataToLocalStorage(data);
    }

    function updatePlayerTurn(playerId, values, multipliers) {
        update(({ players, ...data }) => {
            const updatedGameData = {
                ...data,
                players: players?.map(player => {
                    return player.id !== playerId
                        ? player
                        : {
                        ...player,
                            turn: player.turn.map((_, index) => ({
                                value: values[index],
                                multiple: multipliers[index]
                            })),
                        };
                }),
            };

            saveDataToLocalStorage(updatedGameData);
            return updatedGameData;
        });
    }

    return {
        subscribe,
        set,
        update,
        updatePlayerTurn,
    };
}


export const gameData = createGameData();