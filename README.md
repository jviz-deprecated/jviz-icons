# jviz-icons

[![Dependency Status](https://david-dm.org/jviz/jviz-icons.svg?style=flat-square)](https://david-dm.org/jviz/jviz-icons)

SVG icons suite for web and user interface design.


## Overview

![arrow_down](https://icons.jviz.juanes.xyz/blue/arrow_down.svg)
![arrow_left](https://icons.jviz.juanes.xyz/blue/arrow_left.svg)
![arrow_right](https://icons.jviz.juanes.xyz/blue/arrow_right.svg)
![arrow_up](https://icons.jviz.juanes.xyz/blue/arrow_up.svg)
![bio_karyotypes](https://icons.jviz.juanes.xyz/blue/bio_karyotypes.svg)
![chevron_down](https://icons.jviz.juanes.xyz/blue/chevron_down.svg)
![chevron_left](https://icons.jviz.juanes.xyz/blue/chevron_left.svg)
![chevron_right](https://icons.jviz.juanes.xyz/blue/chevron_right.svg)
![chevron_up](https://icons.jviz.juanes.xyz/blue/chevron_up.svg)
![close](https://icons.jviz.juanes.xyz/blue/close.svg)
![completed_outline](https://icons.jviz.juanes.xyz/blue/completed_outline.svg)
![completed](https://icons.jviz.juanes.xyz/blue/completed.svg)
![done](https://icons.jviz.juanes.xyz/blue/done.svg)
![error_outline](https://icons.jviz.juanes.xyz/blue/error_outline.svg)
![error](https://icons.jviz.juanes.xyz/blue/error.svg)
![home_outline](https://icons.jviz.juanes.xyz/blue/home_outline.svg)
![home](https://icons.jviz.juanes.xyz/blue/home.svg)
![info_outline](https://icons.jviz.juanes.xyz/blue/info_outline.svg)
![info](https://icons.jviz.juanes.xyz/blue/info.svg)
![search](https://icons.jviz.juanes.xyz/blue/search.svg)
![settings](https://icons.jviz.juanes.xyz/blue/settings.svg)
![star_outline](https://icons.jviz.juanes.xyz/blue/star_outline.svg)
![star](https://icons.jviz.juanes.xyz/blue/star.svg)
![trash](https://icons.jviz.juanes.xyz/blue/trash.svg)
![warning_outline](https://icons.jviz.juanes.xyz/blue/warning_outline.svg)
![warning](https://icons.jviz.juanes.xyz/blue/warning.svg)
![zoom_in](https://icons.jviz.juanes.xyz/blue/zoom_in.svg)
![zoom_out](https://icons.jviz.juanes.xyz/blue/zoom_out.svg)   


## Include on your project

You can use our icons via our free and public CDN:

```
https://icons.jviz.juanes.xyz/{COLOR}/{ICON}.svg
```

Where `{COLOR}` is the icon color, and `{ICON}` is the icon name. The following colors are available:

| blue | green | grey | navy | orange |
| ---- | ----- | ---- | ---- | ------ |
| ![](https://icons.jviz.juanes.xyz/blue/completed.svg) |  ![](https://icons.jviz.juanes.xyz/green/completed.svg) | ![](https://icons.jviz.juanes.xyz/grey/completed.svg) | ![](https://icons.jviz.juanes.xyz/navy/completed.svg) | ![](https://icons.jviz.juanes.xyz/orange/completed.svg) |

| pink | purple | red | water | white |
| ---- | ------ | --- | ----- | ----- |
| ![](https://icons.jviz.juanes.xyz/pink/completed.svg) |  ![](https://icons.jviz.juanes.xyz/purple/completed.svg) | ![](https://icons.jviz.juanes.xyz/red/completed.svg) | ![](https://icons.jviz.juanes.xyz/water/completed.svg) | ![](https://icons.jviz.juanes.xyz/white/completed.svg) |


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

Some icons have been extracted from the great [Material design Icons](https://design.google.com/icons/), designed by [Google](https://google.com) and licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
