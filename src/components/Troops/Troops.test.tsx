import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import { mockedTroops, Troop } from 'src/shared';

import Troops from './Troops';

const setUp = ({ troops }: { troops: Troop | undefined }) => render(<Troops troops={troops} />);

describe(Troops.name, () => {
  it('should render component as expected', () => {
    setUp({
      troops: undefined,
    });

    expect(screen.queryByText('Archers:')).toBeInTheDocument();
    expect(screen.getByText('Swordsmen:')).toBeInTheDocument();
    expect(screen.getByText('Spearmen:')).toBeInTheDocument();
  });
  it('should render component when mock data is provided', () => {
    setUp({
      troops: mockedTroops,
    });

    expect(screen.queryByText('123')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('54')).toBeInTheDocument();
  });
});
