const debug = require('@tryghost/debug')('api:canary:utils:serializers:output:themes');

module.exports = {
    browse(themes, apiConfig, frame) {
        debug('browse');

        frame.response = themes;
    },

    upload() {
        debug('upload');
        this.browse(...arguments);
    },

    install() {
        debug('install');
        this.browse(...arguments);
    },

    activate() {
        debug('activate');
        this.browse(...arguments);
    },

    download(fn, apiConfig, frame) {
        debug('download');

        frame.response = fn;
    }
};