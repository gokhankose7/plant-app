import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PremiumBanner} from '../PremiumBanner';
import {NavigationContainer} from '@react-navigation/native';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('PremiumBanner', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <PremiumBanner />
      </NavigationContainer>,
    );

    expect(getByText('FREE Premium Available')).toBeTruthy();
    expect(getByText('Tap to upgrade your account!')).toBeTruthy();
  });

  it('navigates to Paywall screen when pressed', () => {
    const {getByText} = render(
      <NavigationContainer>
        <PremiumBanner />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('FREE Premium Available'));
    expect(mockNavigate).toHaveBeenCalledWith('Paywall');
  });
});
