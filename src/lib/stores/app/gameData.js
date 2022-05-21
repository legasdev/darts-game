import { writable } from "svelte/store";

import {LS_NAMES} from "../../constants/index.js";


function getLocalData() {
    try {
        const gameData = localStorage.getItem(LS_NAMES.gameData);
        return gameData ? JSON.parse(gameData) : gameData;
    } catch (error) {
        return null;
    }
}


function createGameData() {
    const gameData = getLocalData();

    const { subscribe, set: storeSet, update } = writable(gameData);

    function saveDataToLocalStorage(infoByGameData) {
        if ( !infoByGameData ) return;

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
                players: players.map(player => {
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