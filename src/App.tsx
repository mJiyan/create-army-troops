import { useState } from 'react';

import { Troops, TroopForm } from './components';
import { generateAndSaveNewTroop, Troop } from './shared';

function App() {
  const [troops, setTroops] = useState<Troop | undefined>();

  const generateTroops = ({ numberOfTroops }: { numberOfTroops: number }): void => {
    const generatedTroop = generateAndSaveNewTroop({ numberOfTroops });
    setTroops(generatedTroop);
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen">
        <Troops troops={troops} />
        <TroopForm generateTroops={generateTroops} />
      </div>
    </div>
  );
}

export default App;
