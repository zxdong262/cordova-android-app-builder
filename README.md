# cordova-android-app-builder

**Experimental** Build Cordova Android app

## Dev

### Prerequisites

- Install Nodejs and npm(recommend using [nvm](https://github.com/nvm-sh/nvm)).
- Install cordova: `npm i -g cordova`
- Android: Follow the cordova guide to prepare for Android development: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html
- ImageMagick installed (Mac: `brew install imagemagick`, Debian/Ubuntu: `sudo apt-get install imagemagick`, Windows: [See here, install "Legacy tools"](http://www.imagemagick.org/script/binary-releases.php#windows))
- cordova-splash: `npm install cordova-splash -g`
- cordova-icon: `npm install cordova-icon -g`

```bash
# clone project
git clone git@github.com:ringcentral/ringcentral-embeddable-mobile.git
cd ringcentral-embeddable-mobile

# install dependencies
npm run pre
npm i
npm run prepare
npm run icon
npm run splash

# prepare cordova
npm run prepare

```

## Build

```bash

# build for android
npm run build-android

# check platforms/android/app/build/outputs/apk/debug/app-debug.apk


```

## Customize

- **Edit icon/splash**: Just replace [src/app/icon.png](src/app/icon.png) or [src/app/splash.png](src/app/splash.png)
- **Edit config/plugin**: Edit [src/app/config.xml](src/app/config.xml)

## License

MIT
