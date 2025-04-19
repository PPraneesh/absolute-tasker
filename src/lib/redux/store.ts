import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './slice/worksSlice'

export const store = configureStore({
  reducer: {
    worksSlice: tasksSlice
  },
})
export type RootState = ReturnType<typeof store.getState>;

