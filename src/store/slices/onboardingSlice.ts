import {createSlice} from '@reduxjs/toolkit';
import {mmkvStore} from '../mmkvStore';

type OnboardingState = {
  isOnboardingCompleted: boolean;
};

const ONBOARDING_KEY = 'isOnboardingCompleted';

const initialState: OnboardingState = {
  isOnboardingCompleted: mmkvStore.getBoolean(ONBOARDING_KEY) || false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding: state => {
      state.isOnboardingCompleted = true;
      mmkvStore.set(ONBOARDING_KEY, true);
    },
  },
});

export const {completeOnboarding} = onboardingSlice.actions;

export default onboardingSlice.reducer;
