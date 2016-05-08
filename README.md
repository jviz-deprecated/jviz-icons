# jviz-icons

[![Dependency Status](http://david-dm.org/jviz/jviz-icons.svg?style=flat-square)](http://david-dm.org/jviz/jviz-icons)

SVG icons suite for web and user interface design.


## Overview

![arrow_down](http://cdn.juanes.xyz/images/jviz-icons/blue/arrow_down.svg)
![arrow_left](http://cdn.juanes.xyz/images/jviz-icons/blue/arrow_left.svg)
![arrow_right](http://cdn.juanes.xyz/images/jviz-icons/blue/arrow_right.svg)
![arrow_up](http://cdn.juanes.xyz/images/jviz-icons/blue/arrow_up.svg)
![bio_karyotypes](http://cdn.juanes.xyz/images/jviz-icons/blue/bio_karyotypes.svg)
![chevron_down](http://cdn.juanes.xyz/images/jviz-icons/blue/chevron_down.svg)
![chevron_left](http://cdn.juanes.xyz/images/jviz-icons/blue/chevron_left.svg)
![chevron_right](http://cdn.juanes.xyz/images/jviz-icons/blue/chevron_right.svg)
![chevron_up](http://cdn.juanes.xyz/images/jviz-icons/blue/chevron_up.svg)
![close](http://cdn.juanes.xyz/images/jviz-icons/blue/close.svg)
![done](http://cdn.juanes.xyz/images/jviz-icons/blue/done.svg)
![search](http://cdn.juanes.xyz/images/jviz-icons/blue/search.svg)
![settings](http://cdn.juanes.xyz/images/jviz-icons/blue/settings.svg)
![trash](http://cdn.juanes.xyz/images/jviz-icons/blue/trash.svg)
![zoom_in](http://cdn.juanes.xyz/images/jviz-icons/blue/zoom_in.svg)
![zoom_out](http://cdn.juanes.xyz/images/jviz-icons/blue/zoom_out.svg)   


## Include on your project

You can use our icons via our free and public CDN:

```
http://cdn.juanes.xyz/images/jviz-icons/{COLOR}/{ICON}.svg
```

Where `{COLOR}` is the icon color, and `{ICON}` is the icon name. The following colors are available:

| blue | green | grey | navy | orange |
| ---- | ----- | ---- | ---- | ------ |
| ![](http://cdn.juanes.xyz/images/jviz-icons/blue/done.svg) |  ![](http://cdn.juanes.xyz/images/jviz-icons/green/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/grey/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/navy/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/orange/done.svg) |

| pink | purple | red | water | white |
| ---- | ------ | --- | ----- | ----- |
| ![](http://cdn.juanes.xyz/images/jviz-icons/pink/done.svg) |  ![](http://cdn.juanes.xyz/images/jviz-icons/purple/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/red/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/water/done.svg) | ![](http://cdn.juanes.xyz/images/jviz-icons/white/done.svg) |


## Build

By default, you have all the icons on the `svg/` folder. Yo can also build the icons with the colors provided on the `config.json` file following the next steps.

First of all, you need to install [NPM](http://npmjs.com). When you have installed it, run

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

Some icons have been extracted from the great [Material design Icons](http://design.google.com/icons/), designed by [Google](http://google.com) and licensed under [CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/).
