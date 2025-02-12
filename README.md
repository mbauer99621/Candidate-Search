# Candidate Search Application

## Description
The Candidate Search Application is a React-based web application that allows users to browse potential candidates from GitHub, accept or reject them, and save accepted candidates for future reference.

## Features
- Fetches candidate data from GitHub API.
- Displays candidate details including avatar, name, location, email, company, bio, and github url.
- Allows users to accept or reject candidates.
- Displays a list of saved candidates.
- Allows the user to reject a candidate off of the saved list.

## Technologies Used
- React.js
- TypeScript
- LocalStorage API
- GitHub API

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mbauer99621/candidate-search.git
   ```
2. Navigate to the project folder:
   ```sh
   cd candidate-search
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Navigate to the `Candidate Search` page.
2. Browse through candidates fetched from GitHub.
3. Click the accept button to save a candidate.
4. Click the reject button to move to the next candidate.
5. View saved candidates under the `Potential Candidates` section.
6. Click the reject button in the saved candidates table to remove them.

## License
This project is licensed under the MIT License.

## Author
- **Your Name** - [GitHub Profile](https://github.com/your-username)


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
