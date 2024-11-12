# Evren.Dev

Evren.Dev is a full-stack web application with a Vue.js frontend and an ASP.NET Core backend. This project includes features such as localization, form validation, and automated deployment. It is structured to support modern web development practices and tools.

## Project Structure

```
📦evren.dev
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃ ┃ ┗ 📜deploy.yml
 ┣ 📂src
 ┃ ┣ 📂backend
 ┃ ┃ ┣ 📂Extensions
 ┃ ┃ ┃ ┣ 📜LanguageRouteConstraint.cs
 ┃ ┃ ┃ ┣ 📜ReCaptcha.cs
 ┃ ┃ ┃ ┗ 📜RouteDataRequestCultureProvider.cs
 ┃ ┃ ┣ 📂Localization
 ┃ ┃ ┃ ┣ 📜JsonStringLocalizer.Factory.cs
 ┃ ┃ ┃ ┗ 📜JsonStringLocalizer.cs
 ┃ ┃ ┣ 📂Middleware
 ┃ ┃ ┃ ┗ 📜LocalizationMiddleware.cs
 ┃ ┃ ┣ 📂Model
 ┃ ┃ ┃ ┣ 📜AhaSendRequest.cs
 ┃ ┃ ┃ ┣ 📜AhaSendResponse.cs
 ┃ ┃ ┃ ┣ 📜FormRequest.cs
 ┃ ┃ ┃ ┗ 📜JsonResponse.cs
 ┃ ┃ ┣ 📂Properties
 ┃ ┃ ┃ ┗ 📜launchSettings.json
 ┃ ┃ ┣ 📂Resources
 ┃ ┃ ┃ ┣ 📜de.json
 ┃ ┃ ┃ ┗ 📜en.json
 ┃ ┃ ┣ 📜Program.cs
 ┃ ┃ ┣ 📜Secret.json
 ┃ ┃ ┣ 📜SendMailApi.csproj
 ┃ ┃ ┣ 📜appsettings.Development.json
 ┃ ┃ ┗ 📜appsettings.json
 ┃ ┣ 📂frontend
 ┃ ┃ ┣ 📂public
 ┃ ┃ ┃ ┗ 📜favicon.svg
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_base.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_reset.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜_utilities.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜main.scss
 ┃ ┃ ┃ ┃ ┣ 📂documents
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Evren_Yeniev_CV.pdf
 ┃ ┃ ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜icon-error.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜leetcode.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜linkedin.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜times.svg
 ┃ ┃ ┃ ┃ ┃ ┗ 📜twitter.svg
 ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┣ 📂about-me
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜evren-yeniev.webp
 ┃ ┃ ┃ ┃ ┃ ┣ 📂works
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂goztepe
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂onarim
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂thenbaexhibition
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂turmepa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜4.png
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PageFooter.vue
 ┃ ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┃ ┣ 📂desktop
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜DesktopHeader.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mobile
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MobileHeader.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MobileMenu.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MobileMenuButton.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MobileTopbar.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📂shared
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LocaleSwitcher.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MenuItems.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TextLogo.vue
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PageBorders.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PageContent.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PreLoader.vue
 ┃ ┃ ┃ ┃ ┣ 📂shared
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DynamicImage.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EmailLink.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PageTitle.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SocialMediaAccounts.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SvgIcon.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┃ ┣ 📂i18n
 ┃ ┃ ┃ ┃ ┃ ┣ 📂locales
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜de.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜en.json
 ┃ ┃ ┃ ┃ ┃ ┣ 📂rules
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜datetimes.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜numbers.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜translation.js
 ┃ ┃ ┃ ┃ ┣ 📜axios.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜pinia.js
 ┃ ┃ ┃ ┣ 📂router
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂stores
 ┃ ┃ ┃ ┃ ┣ 📜app.store.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜mail.store.js
 ┃ ┃ ┃ ┣ 📂views
 ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AboutView.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BiographyContent.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DownloadCvButton.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactForm.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ContactView.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜InfoList.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HomeView.vue
 ┃ ┃ ┃ ┃ ┗ 📂works
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ModalBox.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PreviewImage.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜WorkDetails.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜WorkItem.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜WorksList.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜WorksView.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📜App.vue
 ┃ ┃ ┃ ┗ 📜main.js
 ┃ ┃ ┣ 📜.editorconfig
 ┃ ┃ ┣ 📜.env
 ┃ ┃ ┣ 📜.env.development
 ┃ ┃ ┣ 📜.gitignore
 ┃ ┃ ┣ 📜.prettierrc.json
 ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┣ 📜eslint.config.js
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜jsconfig.json
 ┃ ┃ ┣ 📜package-lock.json
 ┃ ┃ ┣ 📜package.json
 ┃ ┃ ┣ 📜vite.config.js
 ┃ ┃ ┗ 📜vitest.config.js
 ┣ 📜.editorconfig
 ┣ 📜.gitignore
 ┣ 📜.secrets
 ┣ 📜CNAME
 ┣ 📜README.md
 ┗ 📜evren.dev.sln
```

## Technologies Used

### Frontend

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Pinia**: State management library for Vue.js.
- **Vue Router**: Official router for Vue.js.
- **Vue I18n**: Internationalization plugin for Vue.js.
- **Vite**: Build tool for modern web projects.
- **SASS**: CSS preprocessor.
- **ESLint**: Linting tool for JavaScript and Vue files.
- **Prettier**: Code formatter.
- **Vitest**: Unit testing framework.
- **Axios**: HTTP client for making API requests.
- **Animate.css**: Library of cross-browser animations.
- **vee-validate**: Form validation library.
- **vue-recaptcha**: Component for Google reCAPTCHA.

### Backend

- **ASP.NET Core**: Framework for building modern, cloud-based, internet-connected applications.
- **C#**: Programming language used for the backend.
- **Newtonsoft.Json**: JSON framework for .NET.
- **NSwag.AspNetCore**: Library for generating OpenAPI documentation and client code.
- **ReCaptcha**: Service for protecting websites from spam and abuse.
- **Localization**: Custom localization using JSON files and middleware.

### Deployment and Configuration

- **GitHub Actions**: Continuous integration and deployment.
- **Docker**: Containerization (mentioned in the project description for some frontend projects).
- **Environment Variables**: Managed using `.env` files.

## Key Components

### Backend

- **Localization**: Handled by `JsonStringLocalizer` and

JsonStringLocalizerFactory

in

Localization

.

- **Middleware**: Includes

LocalizationMiddleware

in

Middleware

.

- **Program.cs**: Main entry point for the backend application in

Program.cs

.

### Frontend

- **Main Configuration**: Vite configuration in

vite.config.js

.

- **ESLint Configuration**: Linting setup in

eslint.config.js

.

- **Prettier Configuration**: Code formatting setup in

.prettierrc.json

.

- **Localization**: Handled by Vue I18n with locale files in

locales

.

## Deployment

The project uses GitHub Actions to automate the deployment of the frontend to GitHub Pages. The workflow is defined in

deploy.yml

.

## Configuration

- **.editorconfig**: Defines coding styles and conventions.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **launchSettings.json**: Contains settings for launching the backend application.

## Running the Project

### Frontend

1. **Install Dependencies**:

   ```sh
   npm install
   ```

2. **Compile and Hot-Reload for Development**:

   ```sh
   npm run dev
   ```

3. **Compile and Minify for Production**:

   ```sh
   npm run build
   ```

4. **Run Unit Tests**:

   ```sh
   npm run test:unit
   ```

5. **Lint with ESLint**:
   ```sh
   npm run lint
   ```

### Backend

1. **Build and Run**:
   Open the solution file

evren.dev.sln

in Visual Studio and run the project.

## Summary

Evren.Dev is a comprehensive full-stack web application that leverages modern web development technologies and tools. It includes a Vue.js frontend and an ASP.NET Core backend, with features such as localization, form validation, and automated deployment. The project is well-structured and configured to support efficient development and deployment workflows.
