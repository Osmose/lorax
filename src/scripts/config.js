/* global require:true */
(function (require) {
    'use strict';

    require.config({
        baseUrl: '/app/',

        name: '../scripts/components/almond/almond',

        paths: {
            'angular': '../scripts/components/angular/angular',
            'angular-route': '../scripts/components/angular-route/angular-route',
            'jquery': '../scripts/components/jquery/jquery',
            'jquery-mobile': '../scripts/libs/jquery.mobile.min',
            'jquery-scrollie': '../scripts/libs/jquery.scrollie.min',
            'jquery-selectric': '../scripts/components/jquery-selectric/jquery.selectric',
            'jquery-mousewheel': '../scripts/components/jquery-mousewheel/jquery.mousewheel',
            'modernizr': '../scripts/modernizr',
            'd3': '../scripts/components/d3/d3',
            'topojson': '../scripts/libs/topojson.v1.min',
            'pubsub': '../scripts/components/jquery-tiny-pubsub/tiny-pubsub',
            'utils': '../scripts/utils',
            'lodash': '../scripts/components/lodash/lodash.compat',
            'pixi': '../scripts/components/pixi/pixi.dev',
            'stats': '../scripts/components/stats.js/stats.min',
            'signals': '../scripts/components/js-signals/signals',
            'webfontloader': '../scripts/components/webfontloader/webfontloader',
            'gs': '../scripts/components/greensock/TweenMax',
            'experience': '../scripts/experience'
        },

        include: ['lorax/lorax-app'],

        insertRequire: ['lorax/lorax-app'],

        shim: {
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'angular-route': {
                deps: ['angular']
            },
            'jquery-mobile': {
                deps: ['jquery']
            },
            'jquery-scrollie': {
                deps: ['jquery']
            },
            'jquery-selectric': {
                deps: ['jquery']
            },
            'jquery-mousewheel': {
                deps: ['jquery']
            },
            'pubsub': {
                deps: ['jquery']
            },
            'modernizr': {
                exports: ['Modernizr']
            },
            'stats': {
                exports: 'Stats'
            },
            'webfontloader': {
                exports: 'WebFont'
            },
            'gs': {
                exports: 'gs',
                init: function() {
                    return {
                        TweenMax: this.TweenMax,
                        TimelineMax: this.TimelineMax,
                        Linear: this.Linear,
                        Elastic: this.Elastic
                    };
                }
            }
        },

        deps: ['lorax/lorax-app'],

        wrap: true

    });

}(require));
