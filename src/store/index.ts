import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import questionsReducer from './slices/questionsSlice';
import categoriesReducer from './slices/categoriesSlice';
import appInfoReducer from './slices/appInfoSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    questions: questionsReducer,
    categories: categoriesReducer,
    appInfo: appInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
