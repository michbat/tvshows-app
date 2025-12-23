/**
 * tv-show.js - API pour interagir avec l'API TMDB (The Movie Database)
 * 
 * Cette classe gère toutes les requêtes HTTP vers l'API TMDB
 * pour récupérer les données des séries TV.
 */

import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";



export class TVShowAPI {
    /**
     * Récupère la liste des séries TV populaires
     * @returns {Promise<Array>} Liste des séries populaires ou tableau vide en cas d'erreur
     */
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

    /**
     * Récupère les recommandations pour une série TV spécifique
     * @param {number} tvShowId - L'ID de la série TV
     * @returns {Promise<Array>} Liste des séries recommandées ou tableau vide en cas d'erreur
     */
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

    /**
     * Recherche des séries TV par titre
     * @param {string} title - Le titre de la série à rechercher
     * @returns {Promise<Array>} Liste des séries correspondantes ou tableau vide en cas d'erreur
     */
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