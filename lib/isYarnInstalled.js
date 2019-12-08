'use strict';

const commandExists = require('command-exists').sync;

function isYarnInstalled(callback) {
    const isInstalled = commandExists('yarn');
    
    if (!callback) {
        callback = (isInstalled) => {
            return isInstalled
        }
    }

    return(callback(isInstalled));
}

module.exports = isYarnInstalled;