# CodeAndo
CodeAndo una Red Social para programadores, en donde podran hacer publicaciones y ver publicaciones de otros programadores, adicionalmente tendrán una seccion donde encontraran tutoriales de programacion

## Tecnologias usadas
BACKEND: NodeJS, ExpressJS, JWT
FRONTEND: Astro, ReactTS
BD: MySQL

## Arquitectura

CodeAndo está diseñado bajo la arquitectura de microservicios, lo que permite una mejor escalabilidad y mantenimiento del sistema. A continuación, se describen los componentes principales y cómo interactúan entre sí:

### Componentes

1. **Backend**:
   - **Tecnologías**: NodeJS, ExpressJS, JWT
   - **Funcionalidad**: Proporciona la API para la autenticación, manejo de usuarios, y operaciones CRUD para las publicaciones. El backend se comunica con la base de datos MySQL para almacenar y recuperar datos.

2. **Frontend**:
   - **Tecnologías**: Astro, ReactTS
   - **Funcionalidad**: Interfaz de usuario para que los programadores puedan interactuar con la aplicación, hacer publicaciones y ver publicaciones de otros. El frontend consume la API proporcionada por el backend.

3. **Base de Datos**:
   - **Tecnología**: MySQL
   - **Funcionalidad**: Almacena los datos de usuarios, publicaciones, y cualquier otra información relevante. La base de datos es accedida por el backend para realizar operaciones de lectura y escritura.

### Orquestación

Para facilitar el despliegue y la gestión de los diferentes servicios, utilizamos Docker y Docker Compose:

- **Docker**: Cada componente (frontend, backend, base de datos) se ejecuta en su propio contenedor Docker, lo que permite una fácil escalabilidad y despliegue independiente.
- **Docker Compose**: Se utiliza para orquestar los diferentes servicios, definiendo cómo deben interactuar y comunicarse entre sí.

### Beneficios de la Arquitectura de Microservicios

- **Escalabilidad**: Cada componente puede escalarse de manera independiente según la demanda.
- **Mantenimiento**: Facilita el mantenimiento y la actualización de cada componente sin afectar a los demás.
- **Despliegue Independiente**: Permite desplegar y actualizar cada servicio de manera independiente, reduciendo el tiempo de inactividad.

En resumen, la arquitectura de microservicios de CodeAndo proporciona una base sólida para el crecimiento y la evolución de la plataforma, asegurando que pueda manejar un aumento en el tráfico y la complejidad de las funcionalidades de manera eficiente.

## Cómo instalar

Para instalar CodeAndo en tu máquina, sigue estos pasos:

### Prerrequisitos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Pasos de Instalación

1. **Clonar el repositorio**:
   Clona el repositorio de CodeAndo desde GitHub a tu máquina local.

   ```sh
   git clone https://github.com/tu-usuario/codeando.git
   cd codeando
2. **Contruir el proyecto en Docker**
    Utiliza el comando: 
    ```sh
    docker-compose up --build

## Futuras actulizaciones
   En un futuro se planea realizar actualizaciones, en principio se tienen pendientes algunas las cuales son:
   - **Ver perfil de otros usuarios**
   - **Comentarios en las publicaciones**
   - **Likes en las publicaciones**
   - **Poder poner foto de perfil**
