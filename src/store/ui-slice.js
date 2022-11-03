import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        homePageData: {}, 
        dataLoaded: false, 
        hasError: false 
    },
    reducers: {
        getHomepageData(state, action) {
            state.homePageData = action.payload.homePageData;
            state.dataLoaded = action.payload.dataLoaded;
            state.hasError = action.payload.hasError
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;