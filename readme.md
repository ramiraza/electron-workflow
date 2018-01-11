# Electron Workflow
This project contains a boilerplate template for initiating electron application via utlizing Gulp 4.0 and using pug, css, typescript and live-reload.

#### Overview
This template will create a new `dist` folder in the root directory and serve **Electron** from there. Every time you you start `gulp` or `npm start` the dist folder will be deleted and re-created. 

#### Quickstart
Following is the root directory structure. In order to start developing with the code supplied you must have [Node](https://nodejs.org/en/download/) installed on your computer.


```
  '    |-- gulpfile.js',
  '    |-- package-lock.json',
  '    |-- package.json',
  '    |-- readme.md',
  '    |-- tsconfig.json',
  '    |-- src',
  '        |-- index.pug',
  '        |-- main.ts',
  '        |-- _sass',
  '            |-- main.sass',
  ```
Once Node is installed on your computer, begin with the following:
  ```bash
  git clone https://github.com/unsyllable/electron-workflow.git
  cd electron-workflow
  npm install
  npm start
  ```

#### Modification
Refer to the `gulpfile.js` in order to add support for other subset languages like less or coffeescript if you like. I'm using Gulp version 4.0 to utilize serial loading of tasks as well as run `clean:dist` to re-create the folder before compilation, to mimic something Webpack does with it's plugin. 

In order for livereload to work you need to include `script(src="http://localhost:35729/livereload.js")` before body end tag (it is only for development purpose) and for livereload to function properly. 

_______

#### Add more paths to the `paths` object

```javascript
var paths = {
  electron: {
    src: 'src/main.ts',
    dest: 'dist/'
  },
  html: {
    src: 'src/index.pug',
    dest: 'dist/'
  },
  sass: {
    src: "src/_sass/*.sass",
    dest: "dist/assets/css/"
  }
}
```
Feel free to add to it. Happy Hacking!!!