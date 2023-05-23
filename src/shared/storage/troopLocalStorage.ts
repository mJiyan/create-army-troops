import { Troop } from "src/shared/types";


export const setTroopArrayToStorage = ({ troopKey, troopObject }: { troopKey: number, troopObject: Troop[] }) => {
    try {
        if (troopObject) {
            localStorage.setItem(`${troopKey}`, JSON.stringify(troopObject));
        }
    } catch (e) {
        console.log(e);
    }
}

export const getTroopArrayFromStorage = ({ troopKey }: { troopKey: number }) => {
    const cachedTroopArray = localStorage.getItem(`${troopKey}`);
    if(cachedTroopArray) {
        try {
            return JSON.parse(cachedTroopArray)
        } catch (e) {
            return []
        }
    }
    return []
}
