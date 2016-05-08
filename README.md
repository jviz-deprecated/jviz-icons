# jviz-icons

[![Dependency Status](https://david-dm.org/jviz/jviz-icons.svg?style=flat-square)](https://david-dm.org/jviz/jviz-icons)

SVG icons suite for web and user interface design.


## Build

By default, you have all the icons on the `svg/` folder. Yo can also build the icons with the colors provided on the `config.json` file following the next steps.

First of all, you need to install [NPM](https://npmjs.com). When you have installed it, run

```
npm install
```

This will install all the dependencies. For build the icons, now you can run

```
gulp build
```

This will generate one folder in the `dist/` folder for each color defined in the `config.json` file.


## License

**jviz-icons** is under the [MIT LICENSE](./LICENSE).

Some icons have been extracted from the great [Material design Icons](https://design.google.com/icons/), designed by [Google](https://google.com) and licensed under [CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/).
