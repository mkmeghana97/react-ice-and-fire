import axios from 'axios';
import { uiActions } from "./ui-slice";
import API_URL from '../Services/ApiUrl'

export const fetchHomepageData = () => {
    debugger
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${API_URL}/characters/583`
            )

            if(!response.ok) {
                throw new Error('Could not fetch data!')
            }

            const data = await response.json();

            return data;
        };

        try {
            const homeData = await fetchData();
            dispatch(uiActions.getHomepageData({
                homePageData: homeData,
                dataLoaded: true,
                hasError: false
            }))
        } catch (error) {
            dispatch(uiActions.getHomepageData({
                hasError: true,
                dataLoaded: true
            }))
        }
    //     await axios.get(`${API_URL}/characters/583`)
    //     .then(response => {
    //         dispatch(uiActions.getHomepageData({
    //             homePageData: response.data,
    //             dataLoaded: true,
    //             hasError: false
    //         }))
    //     })
    //     .catch(response => {
    //         dispatch(uiActions.getHomepageData({
    //             hasError: true,
    //             dataLoaded: true
    //         }))
    //     })
    }
}