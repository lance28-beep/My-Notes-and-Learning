## Tailwind

### What si Tailwind CSS?

- CSS framework made up of utility classes
- much lower-level than Bootstrap, Materialize etc.
  > class = "rounded shadow p-2 bg-white

### Using Tailwind CSS

- install Tailwind using npm (node package manager)
- You'll need node.js installed on your computer.


### Install Setup Tailwind CLI
> npm init -y
* that will initialize the package.json file

>npm install -D tailwindcss postcss autoprefixer
>npx tailwindcss init

* Install tailwindcss and its peer dependencies via npm, and create your tailwind.config.js file

```
<!-- postcss.config.js -->
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```
* Configure your template paths
* Add the paths to all of your template files in your tailwind.config.js file.
```
<!-- tailwind.config.js -->
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
}
```
* Add the Tailwind directives to your CSS
* Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```
<!-- main.css -->
@tailwind base;
@tailwind components;
@tailwind utilities;
```

* Start your build process
* Run your build process with npm run dev or whatever command is configured in your package.json file.

> npm run dev