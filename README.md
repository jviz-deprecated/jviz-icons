# jviz-icons

[![Dependency Status](https://david-dm.org/jviz/jviz-icons.svg?style=flat-square)](https://david-dm.org/jviz/jviz-icons)

SVG icons suite for web and user interface design.


## Overview

![arrow_down](https://cdn.juanes.xyz/images/jviz-icons/blue/arrow_down.svg)
![arrow_left](https://cdn.juanes.xyz/images/jviz-icons/blue/arrow_left.svg)
![arrow_right](https://cdn.juanes.xyz/images/jviz-icons/blue/arrow_right.svg)
![arrow_up](https://cdn.juanes.xyz/images/jviz-icons/blue/arrow_up.svg)
![bio_karyotypes](https://cdn.juanes.xyz/images/jviz-icons/blue/bio_karyotypes.svg)
![chevron_down](https://cdn.juanes.xyz/images/jviz-icons/blue/chevron_down.svg)
![chevron_left](https://cdn.juanes.xyz/images/jviz-icons/blue/chevron_left.svg)
![chevron_right](https://cdn.juanes.xyz/images/jviz-icons/blue/chevron_right.svg)
![chevron_up](https://cdn.juanes.xyz/images/jviz-icons/blue/chevron_up.svg)
![close](https://cdn.juanes.xyz/images/jviz-icons/blue/close.svg)
![done](https://cdn.juanes.xyz/images/jviz-icons/blue/done.svg)
![search](https://cdn.juanes.xyz/images/jviz-icons/blue/search.svg)
![settings](https://cdn.juanes.xyz/images/jviz-icons/blue/settings.svg)
![trash](https://cdn.juanes.xyz/images/jviz-icons/blue/trash.svg)
![zoom_in](https://cdn.juanes.xyz/images/jviz-icons/blue/zoom_in.svg)
![zoom_out](https://cdn.juanes.xyz/images/jviz-icons/blue/zoom_out.svg)   


## Include on your project

You can use our icons via our free and public CDN:

```
https://cdn.juanes.xyz/images/jviz-icons/{COLOR}/{ICON}.svg
```

Where `{COLOR}` is the icon color, and `{ICON}` is the icon name. The following colors are available:

| blue | green | grey | navy | orange |
| ---- | ----- | ---- | ---- | ------ |
| ![](https://cdn.juanes.xyz/images/jviz-icons/blue/done.svg) |  ![](https://cdn.juanes.xyz/images/jviz-icons/green/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/grey/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/navy/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/orange/done.svg) |

| pink | purple | red | water | white |
| ---- | ------ | --- | ----- | ----- |
| ![](https://cdn.juanes.xyz/images/jviz-icons/pink/done.svg) |  ![](https://cdn.juanes.xyz/images/jviz-icons/purple/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/red/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/water/done.svg) | ![](https://cdn.juanes.xyz/images/jviz-icons/white/done.svg) |


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
