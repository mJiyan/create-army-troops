import { setTroopArrayToStorage, getTroopArrayFromStorage } from './storage';

import { compareTroopObjects, resetCachedTroopArray, generateAndSaveNewTroop } from './utils';
import { mockedTroopsList, mockedTroops } from './mocks';

const TROOP_KEY = 209;

describe(compareTroopObjects.name, () => {
  it('should return false when cachedTroopList does not include provided troop object', () => {
    const result = compareTroopObjects({
      cachedTroopArray: mockedTroopsList,
      generatedTroop: mockedTroops,
    });
    expect(result).toBe(false);
  });

  it('should return true when cachedTroopList include provided troop object', () => {
    const mockedTroopListWithProvidedTroop = [...mockedTroopsList, mockedTroops];
    const result = compareTroopObjects({
      cachedTroopArray: mockedTroopListWithProvidedTroop,
      generatedTroop: mockedTroops,
    });
    expect(result).toBe(true);
  });
});

describe(resetCachedTroopArray.name, () => {
  it('should return set empty array to cached troop array', () => {
    setTroopArrayToStorage({ troopKey: TROOP_KEY, troopObject: mockedTroopsList });
    const troopArrayFromStorage = getTroopArrayFromStorage({ troopKey: TROOP_KEY });
    expect(troopArrayFromStorage).toEqual(mockedTroopsList);

    resetCachedTroopArray({ numberOfTroops: TROOP_KEY });
    const resetTroopArrayFromStorage = getTroopArrayFromStorage({ troopKey: TROOP_KEY });
    expect(resetTroopArrayFromStorage).toEqual([]);
  });
});

describe(generateAndSaveNewTroop.name, () => {
  it('should generate a new troop and save it in localStorage as an array', () => {
    generateAndSaveNewTroop({ numberOfTroops: TROOP_KEY });
    const troopArrayFromStorage = getTroopArrayFromStorage({ troopKey: TROOP_KEY });
    expect(troopArrayFromStorage).toEqual([{ archers: 1, swordsMen: 1, spearMen: 207 }]);
  });
});
