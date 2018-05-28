# Preflight
Painlessly write email templates using this project starter. Modernises EDM development by bringing both Browsersync and Webpack together, creating an automated inline-style compiler with all configuration exposed.

## Usage
Download the zipped source files into a project directory.

Install dependencies
```bash
npm i
```
Edit templates in `src/templates/` and start the watcher
```bash
npm start
```
This starts Browsersync and compiles templates using Webpack. Compiled files will output into `dist/` with both the source and `*_compiled.html` version.

Navigate using your browser to view the example template
```
http://localhost:3000/template.html
``` 
Making changes in `src/` will automatically compile and refresh the page.
```
src
  ├ images
  │ └ ...
  ├ styles
  │ └ ...
  ├ templates
  | └ template.html
  ├ index.ejs
  ├ index.js
  └ styles.scss
tasks
  ├ browsersync.js
  ├ index.js
  └ webpack.js
```

- `src/images/` are moved to dist and can be used in the template relatively.

- `src/styles/` contains the structure of styles. It is recommended to follow the structure as it contains client-agnostic styles.

- `src/templates/` houses all templates. These are imposed into the `index.ejs` file's template directive.

- `src/index.ejs` is the base for all templates. It not only serves as a template wrapper, but includes important non-conventional CSS required for email compatibility.

- `src/index.js` required for webpack loaders.

- `src/styles.scss` styles loaded by webpack. This should link up all styles in the project.

- `tasks/` configuration for webpack and browsersync.

## Requirements
Node v8 or greater

## Credit
CSS Inliner [Juice](https://github.com/Automattic/juice)
