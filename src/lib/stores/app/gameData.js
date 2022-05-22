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

    function newGame() {
        if ( !browser ) return;

        storeSet(null);
        localStorage.removeItem(LS_NAMES.gameData);
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

    function clearPlayerTurn(playerId) {
        updatePlayerTurn(playerId, [0, 0, 0], [1, 1, 1]);
    }

    function nextPlayer(currentPlayerId, turnResult) {
        update(({ players, ...data }) => {
            const updatedGameData = {
                ...data,
                players: Array.isArray(players)
                    ? [...players].map((player, index) => {
                        if ( player.id === currentPlayerId ) {
                            return {
                                ...player,
                                score: +player.score + turnResult,
                                isTurn: false,
                            };
                        }

                        const nextIndex = currentPlayerId === players.length - 1
                            ? 0
                            : currentPlayerId + 1;

                        if ( index !== nextIndex ) return;

                        return {
                            ...player,
                            isTurn: true,
                        };
                    })
                    : players,
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
        clearPlayerTurn,
        newGame,
        nextPlayer,
    };
}


export const gameData = createGameData();