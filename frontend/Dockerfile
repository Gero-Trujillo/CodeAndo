# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]