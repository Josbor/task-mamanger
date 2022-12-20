import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  value:[] 
}

export const taskSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    getListTask: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getListTask } = taskSlice.actions

export default taskSlice.reducer