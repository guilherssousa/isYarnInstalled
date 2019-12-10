# isYarnInstalled

A ultra-simple module to check if a command-line command exists.

## Installation 

```bash
npm install is-yarn-installed
```

or if you prefer use yarn:

```bash
yarn add is-yarn-installed
```


## usage

You can pass a callback, but for default, a return of the value is defined.

```js
const isYarnInstalled = require('is-yarn-installed');

console.log(isYarnInstalled())
```

```js
const isYarnInstalled = require('is-yarn-installed');

isYarnInstalled(function (isInstalled) => {
    if (isInstalled) {
        console.log('Is installed!')
    } else {
        console.log('Isnt installed. :(')
    }
})
```


## Thanks

### To [@mathisonian](https://github.com/mathisonian) for all the code to detect if the system have the command installed.
