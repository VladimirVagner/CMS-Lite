const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.copy('resources/img', 'public/img');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.combine(
    [
        'resources/js/jquery.min.js',
        // srcJs + 'pages/jquery-ui.min.js',
        // paths.popperjs + 'popper.min.js',
        // paths.bootstrap + 'js/bootstrap.min.js',
        'node_modules/raphael/raphael.min.js',
        'resources/js/livicons-1.4.min.js',
        // srcJs + 'metisMenu.js',
        // srcJs + 'josh.js',
        // srcJs + 'pages/minisidebar.js',
        // srcJs + 'jquery-slimscroll.js',
        // vendors + 'holderjs/holder.min.js',
        // paths.bootstrapValidator + 'js/bootstrapValidator.min.js',
    ],
    'public/js/admin.js'
);
