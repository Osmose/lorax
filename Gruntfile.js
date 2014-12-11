'use strict';

module.exports = function (grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        src: 'src',
        dist: 'dist',
        temp: '.tmp',
        data: 'data',
    };

    var fs = require('fs');
    var modRewrite = require('connect-modrewrite');
    var moment = require('moment');
    var path = require('path');
    var PO = require('pofile');
    var sh = require('execSync');
    var _ = require('lodash');

    var connectMiddleware = function (connect, options) {
        var middlewares = [];

        // Mod-rewrite for
        middlewares.push(modRewrite([
            '!api(.*)|cms(.*)|\/status(.*)|' +
            '\\.html|\\.js|\\.css|\\.jpg|\\.ico|\\.json|' +
            '\\.png|\\.gif|\\.pdf|\\.ttf|\\.otf|\\.xml$ /index.html [L]'
        ]));

        // Add base directories to middleware array
        var directory = options.directory || options.base[options.base.length - 1];
        if (!Array.isArray(options.base)) {
            options.base = [options.base];
        }

        options.base.forEach(function (base) {
            // Serve static files.
            middlewares.push(connect.static(base));
        });

        // Make directory browse-able.
        middlewares.push(connect.directory(directory));

        return middlewares;
    };

    grunt.initConfig({

        config: config,

        bower: {
            options: {
                cleanTargetDir: true,
                cleanBowerDir: false,
                copy: true,
                install: false
            },
            install: {
                options: {
                    targetDir: '<%= config.src %>/scripts/components'
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.temp %>'
                    ]
                }]
            },
            grunticon: {
                files: [{
                    src: [
                        '<%= config.src %>/images/icons-min/'
                    ]
                }]
            }
        },

        concat: {
            /*styles: {
                src: ['<%= config.temp %>/styles/main.css'],
                dest: '<%= config.dist %>/styles/main.css'
            },*/
            headScripts: {
                src: [
                    '<%= config.src %>/scripts/components/modernizr/modernizr.js',
                    '<%= config.src %>/scripts/grunticon.js'
                ],
                dest: '<%= config.dist %>/scripts/lorax-head.min.js'
            }
        },

        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            server: {
                options: {
                    open: 'http://localhost:<%= connect.options.port%>',
                    middleware: connectMiddleware,
                    base: ['<%= config.temp %>', '<%= config.src %>']
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.src %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'robots.txt',
                        //'sitemap.xml',
                        'scripts/data/{,*/}*.{js,json}',
                        'images/{,*/}*.{ico,gif,png,jpg,pdf,html}',
                        'fonts/{,*/}*.{otf,ttf,eot,woff,svg}',
                        'data/**/*.json',
                        '**/*.tpl.html',
                        'index.html'
                    ]
                }]
            }
        },

        grunticon: {
            options: {
                customselectors:
                    grunt.file.readJSON('src/styles/grunticon/custom-selectors.json')
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images/icons-min/',
                    src: ['*.svg', '*.png'],
                    dest: '<%= config.dist %>/images/icons/'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images/icons-min/',
                    src: ['*.svg', '*.png'],
                    dest: '<%= config.temp %>/images/icons/'
                }]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '!Gruntfile.js',
                'app/**/*.js',
                '<%= config.src %>/scripts/{,*/}*.js',
                '!<%= config.src %>/scripts/libs/{,*/}*.js',
                '!<%= config.src %>/scripts/components/{,*/}*.js',
                '!<%= config.src %>/scripts/utils.js',
                '!bower_components/{,*/}*.js',
                '!node_modules/{,*/}*.js',
                '!**/grunticon.js'
            ]
        },

        less: {
            server: {
                options: {
                    paths: ['<%= config.src %>/styles']
                },
                files: {
                    '<%= config.temp %>/css/main.css': '<%= config.src %>/styles/main.less'
                }
            },
            dist: {
                options: {
                    cleancss: true,
                    paths: ['<%= config.src %>/styles']
                },
                files: {
                    '<%= config.dist %>/css/main.css': '<%= config.src %>/styles/main.less'
                }
            }
        },

        notify: {
            less: {
                options: {
                    message: 'Less refresh complete'
                }
            },
            grunticon: {
                options: {
                    message: 'Grunticon refresh complete'
                }
            },
            server: {
                options: {
                    message: 'Server started'
                }
            }
        },

        requirejs: {
            dist: {
                options: {
                    baseUrl: '<%= config.src %>/app',
                    mainConfigFile: '<%= config.src %>/scripts/config.js',
                    normalizeDirDefines: 'all',
                    out: '<%= config.temp %>/scripts/lorax.js',
                    preserveLicenseComments: false
                }
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/images/icons-source',
                    src: ['*.svg'],
                    dest: '<%= config.src %>/images/icons-min'
                }]
            }
        },

        uglify: {
            options: {
                compress: {
                    /*jshint camelcase: false */
                    drop_console: true
                }
            },
            dist: {
                files: {
                    '<%= config.dist %>/scripts/lorax.min.js': [
                        '<%= config.temp %>/scripts/lorax.js'
                    ]
                }
            }
        },

        usemin: {
            html: ['<%= config.dist %>/{,*/}*.html'],
            //css: ['<%= config.temp %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= config.dist %>']
            }
        },

        useminPrepare: {
            html: '<%= config.src %>/index.html',
            options: {
                dest: '<%= config.dist %>'
            }
        },

        watch: {
            styles: {
                files: ['<%= config.src %>/styles/**/*.less'],
                tasks: [
                    'less:server',
                    'notify:less'
                ]
            },
            grunticon: {
                files: [
                    '<%= config.src %>/images/icons-source/{,*/}*.svg',
                    '<%= config.src %>/styles/grunticon/custom-selectors.json'
                ],
                tasks: [
                    'clean:grunticon',
                    'svgmin',
                    'grunticon:server',
                    'notify:grunticon'
                ]
            },
            jshint: {
                files: ['<%= jshint.all %>'],
                tasks: ['jshint']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= config.src %>/*.html', // Core pages
                    '<%= config.src %>/styles/**/*.less', // Styles
                    '<%= config.src %>/scripts/{,*/}*.js', // Global scripts
                    'app/{,**/}*.{js,html}', // ng JS and templates
                    'app/images/{,*/}*.{png,jpg,jpeg,gif}' // Images
                ]
            }
        },

        l10n: {
            directory: 'locale',
            localeFile: 'LC_MESSAGES/messages.po',
            templateFile: 'templates/LC_MESSAGES/messages.pot',
            locales: ['en-US', 'fr'],
            files: [
                '<%= config.data %>/main.json',
                '<%= config.data %>/infographics.json',
                '<%= config.data %>/country-data.json',
            ],
        },
    });

    grunt.registerTask('default', []);

    // Dev
    grunt.registerTask('server', function () {
        grunt.task.run([
            'clean:server',
            'clean:grunticon',
            'svgmin',
            'grunticon:server',
            'notify:grunticon',
            'bower:install',
            'less:server',
            'connect:server',
            'notify:server',
            'watch'
        ]);
    });

    // Build
    grunt.registerTask('build', function () {
        grunt.task.run([
            'clean:dist',
            'clean:grunticon',
            'useminPrepare',
            'bower:install',
            'less:dist',
            'svgmin',
            'grunticon:dist',
            'copy:dist',
            'requirejs',
            'concat',
            'uglify:dist',
            'usemin'
        ]);
    });

    // Dev
    grunt.registerTask('icons', function () {
        grunt.task.run([
            'clean:grunticon',
            'svgmin',
            'grunticon:server',
            'notify:grunticon'
        ]);
    });

    grunt.registerTask('extract', function() {
        var l10n = grunt.config('l10n');
        var potFile = new PO();
        var result = null;

        // Headers
        potFile.headers = {
            'Project-Id-Version': 'Lorax 0.1.0',
            'POT-Creation-Date': moment().format('YYYY-MM-DD HH:mm+HHmm'),
            'Content-Type': 'text/plain; charset=utf8',
            'Content-Transfer-Encoding': '8bit',
        };

        l10n.files.forEach(function(filename) {
            var string_re = /<% _\(['"](.+?)['"]\) %>/g;
            var contents = fs.readFileSync(filename, {encoding: 'utf8'});
            do {
                result = string_re.exec(contents);
                if (result !== null) {
                    var string = result[1];
                    var item = new PO.Item();
                    item.msgid = string.trim().replace('\n', '');
                    item.msgstr = [string];
                    potFile.items.push(item);
                }
            } while (result !== null);
        });

        var potFilename = l10n.directory + '/' + l10n.templateFile;
        mkPath(path.dirname(potFilename));
        fs.writeFileSync(potFilename, potFile.toString(), {encoding: 'utf8'});
        console.log('Strings extracted successfully.');
    });

    grunt.registerTask('merge', function() {
        var l10n = grunt.config('l10n');
        var potFilename = path.join(l10n.directory, l10n.templateFile);
        if (!fs.existsSync(potFilename)) {
            console.error('POT file not found, please run grunt extract first!');
            return;
        }

        l10n.locales.forEach(function(locale) {
            var result = null;
            var gnuLocale = locale.replace('-', '_');
            var poFilename = path.join(l10n.directory, gnuLocale, l10n.localeFile);

            if (!fs.existsSync(poFilename)) {
                console.log('File not found for locale ' + locale + ', creating it...');
                mkPath(path.dirname(poFilename));
                result = sh.exec([
                    'msginit',
                    '--no-translator',
                    '-i', potFilename,
                    '-o ' + poFilename
                ].join(' '));
                if (result.code) {
                    console.error('Non-zero return code from msginit: ' + result.stdout);
                    return;
                }
            }

            result = sh.exec([
                'msgmerge',
                '-U',
                '--lang=' + gnuLocale,
                poFilename,
                potFilename
            ].join(' '));
            if (result.code) {
                console.error('Non-zero return code from msgmerge: ' + result.stdout);
                return;
            }
        });

        console.log('Strings merged.');
    });

    function mkPath(directory_path) {
        var currentPath = '';
        var parts = directory_path.split(path.sep);
        parts.forEach(function(entry) {
            var newCurrentPath = path.join(currentPath, entry);
            if (!fs.existsSync(newCurrentPath)) {
                fs.mkdirSync(newCurrentPath);
            }
            currentPath = newCurrentPath;
        });
    }
};
