import { writable } from "svelte/store";

function createPlayers() {
    const { subscribe, update } = writable([]);

    function add(name, color) {
        update(playersList => [
            ...playersList,
            {
                id: playersList[playersList.length - 1]?.id + 1 || 0,
                name,
                color,
                isTurn: playersList.length === 0,
            }
        ]);
    }

    function remove(userId) {
        update(playersList => playersList.filter(
            ({ id }) => userId !== id
        ));
    }

    return {
        subscribe,
        add,
        remove,
    };
}

export const players = createPlayers();