### To-zo Frontend

Welcome to To-do List To-zo frontend repository! This project aims to provide users with a convenient platform for managing their tasks efficiently. Users can log in, create, modify, and delete tasks, as well as organize them using customizable tags and categories. The frontend is built with Angular v17 and supports internationalization (i18n) for English and Spanish languages.

#### Technologies Used:
- Angular v17
- Internationalization (i18n) for English and Spanish language support

#### Getting Started:
1. Open your terminal.
2. Navigate to the project directory.
3. Run `npm i` to install all dependencies.
4. Ensure that the backend is running.
5. Run `ng serve -o` to initialize the application. This command will automatically open the application in your default web browser.

#### Usage:
- To register, go to `/auth/register` route.
- The application utilizes guards for routing:
  - If a user attempts to access the login page while already logged in, they will be redirected to the main application.
  - If a user is not logged in and attempts to access any route within the application, they will be redirected to the login page.
