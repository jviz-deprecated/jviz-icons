# jviz-icons

[![devDependency Status](https://david-dm.org/nodebio/jviz-icons/dev-status.svg?style=flat-square)](https://david-dm.org/nodebio/jviz-icons#info=devDependencies)

SVG icons suite for web and user interface design.


## Build

By default, you have all the icons on the `svg/` folder. Yo can also build the icons with the colors provided on the `config.json` file following the next steps.

First of all, you need to install [NPM](https://npmjs.com). When you have installed it, run

```
npm install
```

This will install all the dependencies. For build the icons, now you can run

```
gulp build-icons
```

This will generate one folder for each color defined in the `config.json` file in the `dist/` folder. You can also build the demo page running

```
gulp build
```

This will generate a `index.html` file and a `css` and `js` folders in the `dist/` folder.


## License

**jviz-icons** is under the [MIT LICENSE](./LICENSE).

Some icons have been extracted from the great [Material design Icons](https://design.google.com/icons/), designed by [Google](https://google.com) and licensed under [CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/).
