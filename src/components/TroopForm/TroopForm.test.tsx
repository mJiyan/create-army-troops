import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import TroopForm, { TroopFormType } from './TroopForm';

const setUp = ({ generateTroops }: TroopFormType) =>
  render(<TroopForm generateTroops={generateTroops} />);

const mockGenerateTroops = jest.fn();

describe(TroopForm.name, () => {
  it('should render component as expected', () => {
    setUp({
      generateTroops: mockGenerateTroops,
    });

    expect(screen.getByText('Create troops')).toBeInTheDocument();
  });
});
