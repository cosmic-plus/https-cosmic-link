# cosmic-link

This is the https://cosmic.link website files.

## Roadmap

https://github.com/MisterTicot/cosmic-link-src/TODO.md

## Run locally

If you have git and npm, you can serve the website localy:

```
git clone https://github.com/MisterTicot/cosmic-link
cd cosmic-link
git submodule update -i
npm install --only=prod
npm run serve
```

The website should be available at http://127.0.0.1:8080

## Tweak

If you only want to change the way the website display, you can
edit the files `index.html` and `main.css`.

If you want to make change to the javascript code, you need to
install the full node stack before running the server:

```
npm install
npm run serve
```

The changes made to the javascripts files in the `src/` directory
will be pushed to the website automatically. The changes to the
html and css files in the `src/` directory have to be manually
pushed using:

```
npm build-html
npm build-css
```

## Build

To pack the production version:

```
npm format
npm build
```
