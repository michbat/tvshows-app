import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";



export class TVShowAPI {
    static async fetchPopulars() {
        try {
            const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
            return response.data.results;
        } catch (error) {
            console.error("Error fetching popular TV shows:", error);
            return [];
        }
        // return FAKE_POPULARS;
    }

    static async fetchRecommendations(tvShowId) {
        try {
            const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
            return response.data.results;
        } catch (error) {
            console.error(`Error fetching recommendations for TV show ${tvShowId}:`, error);
            return [];
        }
        // return FAKE_RECOMMENDATIONS;
    }

    static async fetchByTitle(title) {
        try {
            const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
            return response.data.results;
        } catch (error) {
            console.error(`Error searching for TV show "${title}":`, error);
            return [];
        }
    }
}