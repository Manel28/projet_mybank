# MyBank – Personal Expense Manager

Projet réalisé par **Manel SMAIL** dans le cadre de la formation CDA – 2025.



# Objectif du projet

Créer une application React simple et fonctionnelle pour gérer ses dépenses personnelles.  
Ce projet m’a permis de pratiquer plusieurs compétences comme :

- Le versionning avec Git & GitHub
- Le développement React (useState, useEffect)
- La gestion des données avec `localStorage`
- La structuration d’un projet frontend
- La mise en page avec HTML/CSS
- L’organisation de l’interface en composants
- L’intégration progressive de Docker (conteneurisation)



## Fonctionnalités développées

- Ajout de dépenses via un formulaire
- Affichage des dépenses sous forme de liste
- Sauvegarde des données dans `localStorage`
- Affichage de la page "Categories"
- Mise en place d’un `Header` et `Footer`
- Affichage conditionnel de la liste des dépenses
- Filtres par catégorie (fonctionnalité prévue)
-App servie avec Nginx dans un conteneur Docke



## Technologies utilisées

-  React (Vite)
-  Git + GitHub
-  localStorage
-  CSS classique
- 🐳 Docker 



##  Installation du projet

```bash
git clone https://github.com/Manel28/projet_mybank.git
cd projet_mybank
npm install
npm run dev
```

---
🐳 Utilisation avec Docker

# 1. Créer l’image Docker :

```bash
docker build -t mybank-app .
```

# 2. Lancer le conteneur :

```bash
docker run -d -p 8080:80 mybank-app
```

# 3. Ouvrir l’app dans le navigateur :

👉 http://localhost:8080

# Structure du projet

```
mybank/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── FormulaireExpense.jsx
│   ├── pages/
│   │   ├── PageExpenses.jsx
│   │   └── PageCategories.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── package.json
├── vite.config.js
└── README.md

## Notes personnelles

Ce projet m’a permis de comprendre la logique d’un composant React :  
comment il échange avec son parent, comment il modifie l’état (`useState`),  
et comment les données peuvent être enregistrées durablement avec `localStorage`.

J’ai aussi appris à structurer mon code, faire des commits réguliers,  
et corriger des bugs liés à la syntaxe JSX ou à l'importation des composants.

La partie "filtrage par catégories" est en cours d’implémentation,  
et la conteneurisation Docker viendra compléter le projet.


##Auteure

**Manel SMAIL**  
Formation CDA - 2025  
Projet pédagogique personnel
