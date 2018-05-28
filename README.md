# Preflight
Painless CSS inliner for email templates

## Usage
Clone the repository as a project directory.
```
git clone git@github.com:Naph/preflight edms
```
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
https://localhost:3000/template.html
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
```

- `images/` are moved to dist and can be used in the template relatively.
- `styles/` contains the structure of styles. It is recommended to follow the structure as it contains client-agnostic styles.
- `templates/` houses all templates. These are imposed into the `index.ejs` file's template directive.
- `index.ejs` is the base for all templates. It not only serves as a template wrapper, but includes important non-conventional CSS required for email compatibility.
- `index.js` required for webpack loaders.
- `styles.scss` styles loaded by webpack. This should link up all styles in the project.

## Requirements
Node `^8.0.0` or greater

## Credit
CSS Inliner [Juice](https://github.com/Automattic/juice)
