import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import questionsReducer from './slices/questionsSlice';
import categoriesReducer from './slices/categoriesSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    questions: questionsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
