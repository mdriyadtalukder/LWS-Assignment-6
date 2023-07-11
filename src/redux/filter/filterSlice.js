import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    statuss: "All",
    sorts: "Default"
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filtering: (state, action) => {
            state.statuss = action.payload;
        },
        sorting: (state, action) => {
            state.sorts = action.payload;
        }
    }
})
export default filterSlice.reducer;
export const { filtering, sorting } = filterSlice.actions;