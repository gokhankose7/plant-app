import {createSlice} from '@reduxjs/toolkit';

type AppInfoState = {
  greeting: string;
};

const getGreetingByTime = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning!';
  } else if (hour >= 12 && hour < 18) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
};

const initialState: AppInfoState = {
  greeting: getGreetingByTime(),
};

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    updateGreeting: state => {
      state.greeting = getGreetingByTime();
    },
  },
});

export const {updateGreeting} = appInfoSlice.actions;
export default appInfoSlice.reducer;
