import { setTroopArrayToStorage, getTroopArrayFromStorage } from "./troopLocalStorage";

import { mockedTroopsList } from "src/shared/mocks";

const TROOP_KEY = 209;

describe("troop localStorage ", () => {
    it("should set and return troop with using localStorage", () => {
        setTroopArrayToStorage({troopKey: TROOP_KEY, troopObject: mockedTroopsList})
        const result = getTroopArrayFromStorage({troopKey: TROOP_KEY})
        expect(result).toEqual(mockedTroopsList)
    })
});