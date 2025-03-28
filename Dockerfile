#Je commence par une image Node.js 
FROM node:18-alpine AS builder

# et je cree un dossier /app dans mon conteneur ou je puisse mettre mon projet
WORKDIR /app

# ici je copie les fichiers package.json 
COPY package*.json ./

# et la on installe toutes les dépendances de mon projet 
RUN npm install

# Ensuite on copie tt le contenu de mon projet dans le conteneur
COPY . .

# onbuild mon appli pour qu’elle soit prête à être mise en ligne
RUN npm run build

# et Maintenant je passe à une image NGINX pour servir les fichiers buildés 
FROM nginx:alpine

# Je copie le dossier dist qui est généré dans le dossier public de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# J’ouvre le port 80 pour que mon appli soit accessible
EXPOSE 80

# et on lance nginx pour afficher mon site
CMD ["nginx", "-g", "daemon off;"]
