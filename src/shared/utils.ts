import * as yup from 'yup';

import { setTroopArrayToStorage, getTroopArrayFromStorage } from './storage';
import { Troop } from './types';

export const formikObjectSchema = () =>
  yup.object().shape({
    numberOfTroops: yup
      .number()
      .typeError('It must be a number')
      .min(3, 'Number of troops must be greater than 2.'),
  });

export const compareTroopObjects = ({
  cachedTroopArray,
  generatedTroop,
}: {
  cachedTroopArray: Troop[];
  generatedTroop: Troop;
}) =>
  cachedTroopArray.some((index: Troop) => JSON.stringify(index) === JSON.stringify(generatedTroop));

export const resetCachedTroopArray = ({ numberOfTroops }: { numberOfTroops: number }): void =>
  setTroopArrayToStorage({ troopKey: numberOfTroops, troopObject: [] });

export const generateAndSaveNewTroop = ({ numberOfTroops }: { numberOfTroops: number }): Troop => {
  const cachedTroopArray = getTroopArrayFromStorage({ troopKey: numberOfTroops });
  const maxValueOfTroops = numberOfTroops - 2;
  let decreasingValue = maxValueOfTroops;
  let increasingValue = 1;

  for (let index = 1; index <= maxValueOfTroops; index += 1) {
    while (decreasingValue > 0) {
      const generatedTroop = {
        archers: index,
        spearMen: decreasingValue,
        swordsMen: increasingValue,
      };
      if (!compareTroopObjects({ cachedTroopArray, generatedTroop })) {
        cachedTroopArray.push(generatedTroop);
        setTroopArrayToStorage({ troopKey: numberOfTroops, troopObject: cachedTroopArray });
        return generatedTroop;
      }
      decreasingValue -= 1;
      increasingValue += 1;
    }
    decreasingValue = maxValueOfTroops - index;
    increasingValue = 1;
  }
  const firstTroopAtCache = cachedTroopArray[0];
  resetCachedTroopArray({ numberOfTroops });

  return firstTroopAtCache;
};
