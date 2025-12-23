# 📺 Watowatch - TV Shows App

Une application React moderne pour découvrir et explorer des séries TV populaires en utilisant l'API TMDB (The Movie Database).

![React](https://img.shields.io/badge/React-19.2.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3.svg)

## ✨ Fonctionnalités

- 🎬 **Affichage des séries populaires** : Découvrez les séries TV les plus populaires du moment
- 🔍 **Recherche par titre** : Trouvez facilement vos séries préférées
- ⭐ **Système de notation** : Visualisation des notes avec des étoiles (sur 5)
- 💡 **Recommandations personnalisées** : Liste de 10 séries recommandées basées sur votre sélection
- 📱 **Design responsive** : Interface adaptée aux mobiles et desktops
- 🎨 **Interface élégante** : Arrière-plan dynamique avec l'image de la série sélectionnée
- ⚡ **Navigation fluide** : Scroll horizontal pour parcourir les recommandations

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite** - Build tool moderne et rapide
- **Axios** - Client HTTP pour les appels API
- **Bootstrap 5** - Framework CSS pour le design responsive
- **Bootstrap Icons** - Icônes pour l'interface
- **TMDB API** - Source des données sur les séries TV
- **CSS Modules** - Pour un styling modulaire et scopé

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Une clé API TMDB (gratuite sur [themoviedb.org](https://www.themoviedb.org/settings/api))

## 🔧 Installation

1. **Cloner le repository**

```bash
git clone <votre-repo-url>
cd tvshows-app
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer l'API Key**

   Créez ou modifiez le fichier `src/config.js` avec votre clé API TMDB :

   ```javascript
   export const API_KEY_PARAM = "?api_key=VOTRE_CLE_API";
   export const BASE_URL = "https://api.themoviedb.org/3/";
   export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
   export const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300";
   ```
4. **Lancer l'application en mode développement**

```bash
npm run dev
```

5. **Accéder à l'application**

   Ouvrez votre navigateur sur `http://localhost:5173`

## 🏗️ Structure du projet

```
tvshows-app/
├── public/                     # Fichiers statiques
├── src/
│   ├── api/                   # Gestion des appels API
│   │   ├── tv-show.js        # Classe API pour TMDB
│   │   └── fake_data.js      # Données de test
│   ├── assets/               # Images et polices
│   │   ├── fonts/
│   │   └── images/
│   ├── components/           # Composants React
│   │   ├── FiveStarRating/   # Affichage des étoiles
│   │   ├── Logo/             # Logo de l'app
│   │   ├── SearchBar/        # Barre de recherche
│   │   ├── TVShowDetail/     # Détails d'une série
│   │   ├── TVShowList/       # Liste de séries
│   │   └── TVShowListItem/   # Item de liste
│   ├── App.jsx               # Composant principal
│   ├── config.js             # Configuration API
│   └── main.jsx              # Point d'entrée
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Fonctionnement

### Composant Principal (App.jsx)

- Gère l'état global de l'application
- Charge les séries populaires au démarrage
- Gère les recherches et la sélection de séries
- Affiche les messages d'erreur

### API (tv-show.js)

- `fetchPopulars()` : Récupère les séries populaires
- `fetchRecommendations(tvShowId)` : Récupère les recommandations
- `fetchByTitle(title)` : Recherche par titre
- Gestion des erreurs avec try-catch

### Composants

- **Logo** : Affichage du logo et titre
- **SearchBar** : Recherche avec détection de la touche Enter
- **TVShowDetail** : Affiche titre, note et description
- **TVShowList** : Liste horizontale scrollable
- **TVShowListItem** : Carte cliquable d'une série
- **FiveStarRating** : Système de notation visuelle

## 📦 Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Créer un build de production
npm run preview  # Prévisualiser le build de production
npm run lint     # Vérifier le code avec ESLint
```

## 🎨 Features UX

- **Scroll horizontal personnalisé** : Scrollbar visible uniquement au survol
- **Images dynamiques** : Arrière-plan qui change selon la série sélectionnée
- **Feedback utilisateur** : Messages d'erreur clairs en cas de problème
- **Titre tronqué** : Les longs titres sont automatiquement raccourcis
- **Design moderne** : Interface sombre élégante

## 🐛 Gestion des erreurs

L'application gère les erreurs de manière robuste :

- Erreurs réseau lors des appels API
- Recherches sans résultat
- Chargement initial échoué
- Messages d'erreur user-friendly

## 📝 Licence

Ce projet est un projet d'apprentissage personnel.

**Développé pour apprendre React dans le cadre d'un tutoriel.**
