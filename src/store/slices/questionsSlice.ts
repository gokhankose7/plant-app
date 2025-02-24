import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export type Question = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

type QuestionsState = {
  data: Question[];
  loading: boolean;
  error: string | null;
};

const initialState: QuestionsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await fetch(
      'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions',
    );
    const data = await response.json();
    return data;
  },
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default questionsSlice.reducer;
