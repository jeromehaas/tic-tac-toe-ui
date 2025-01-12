# BUILD ON NODE
FROM node:18

# SET WORKING DIRECTORY
WORKDIR /app

# COPY THE PACKAGE.JSON AND PACKAGE-LOCK.JSON FILES
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm install

# COPY THE REST OF THE APPLICATION CODE
COPY . .

# BUILD THE VUE.JS APP FOR PRODUCTION
RUN npm run build

# INSTALL AN NGINX SERVER TO SERVE THE APP
FROM nginx:alpine

# COPY THE BUILT FILES FROM THE PREVIOUS STAGE TO THE NGINX WEB ROOT
COPY --from=0 /app/dist /usr/share/nginx/html

# EXPOSE PORT 80
EXPOSE 80

# START NGINX SERVER
CMD ["nginx", "-g", "daemon off;"]
