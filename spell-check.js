module.exports = {
    plugins: [ 'spellcheck' ],
    rules: {
        'spellcheck/spell-checker': [ 'error', {
            'lang': 'en_US',
            'comments': false,
            'strings': false,
            'identifiers': true,
            'templates': false,
            'skipIfMatch': [
                '^\\$?..$',
                'langParams', // DataSource option
            ],
            'skipWords': [
                'dx', // DevExpress
                'el', // Element
                'fn', // Function
                'fx', // Effects
                'jq', // jQuery
                'js', // JavaScript
                'ko', // Knockout
                'ln', // Math
                'na', // Special case for NaN
                'ng', // Angular
                'ok', // OK
                'px', // Pixel
                'tz', // Timezone
                'ua', // User-agent
                'ui', // User Interface
                'un', // 'Un-Escape'
                'xs', // extra small
                'xy', // XY-diagram
                'vm', // view-model

                'cjs',
                'esm',
                'amd',          // AMD modules
                'ast',          // Abstract Syntax Tree
                'bing',
                'browserslist', // auto-prefixer browsers list
                'cldr',         // Unicode CLDR Project
                'cssom',        // cssom parser
                'cwd',          // current working directory
                'edm',          // Entity Data Model
                'eol',          // end of line
                'etag',         // HTTP header
                'eula',         // EULA
                'eslintrc',
                'jsrender',     // JsRender template engine
                'hsl',          // HSL color
                'hsv',          // HSV color
                'iana',         // IANA (time-zone database)
                'ie',
                'ie11',
                'ios',
                'ipad',
                'iphone',
                'linejoin',   // SVG 'stroke-linejoin'
                'linux',
                'lstat',
                'ltr',        // Left-to-Right
                'mdx',        // OLAP Multi-dimensional expressions
                'mercator',   // Map term
                'microsoft',
                'moz',        // Vendor prefix
                'mozilla',
                'mvc',
                'firefox',
                'fmt',
                'msie',
                'odata',      // OData
                'readonly',
                'rebase',     // clean-css option
                'rmdir',
                'rollup',
                'rtl',        // Right-to-Left
                'scss',
                'semver',     // The semantic versioner for npm
                'sep',        // Nodejs path.sep
                'sinon',      // JS library
                'stderr',     // Nodejs subprocess property
                'stdout',     // Nodejs subprocess property
                'symlink',
                'tspan',      // SVG element
                'tspans',
                'uglify',     // UglifyJS
                'untils',     // Time-zone term
                'viapoint',   // Geo term
                'webkit',
                'webpack',
                'xmla',       // XML for Analysis
                'ldml',       // LOCALE DATA MARKUP LANGUAGE

                'png',
                'jpg',
                'svg',

                'API',
                'accessor',
                'accessors',
                'acos',
                'activedescendant',
                'adaptivity',
                'addons',
                'affine',
                'aggregator',
                'aggregators',
                'ajax',
                'ampm',
                'anim',
                'appt',
                'appts',
                'arabic',
                'areapolarseries',
                'arg',
                'argc',
                'args',
                'argv',
                'asc',
                'ascii',
                'asin',
                'aspnet',
                'async',
                'atan',
                'attr',
                'attributor',
                'attrs',
                'autocomplete',
                'autocompletion',
                'backend',
                'backends',
                'barpolarseries',
                'basename',
                'bezier',
                'bindable',
                'bool',
                'buf',
                'calc',
                'camelize',
                'cancelable',
                'captionize',
                'ceil',
                'centroid',
                'checkbox',
                'checkboxes',
                'codomain',
                'coef',
                'coefs',
                'coeff',
                'coeffs',
                'colgroup',
                'colgroups',
                'colorizer',
                'colorizers',
                'colspan',
                'colspans',
                'comparer',
                'concat',
                'cond',
                'configs',
                'configurator',
                'configurators',
                'const',
                'consts',
                'conv',
                'coord',
                'coords',
                'cordova',
                'cpus',
                'crit',
                'crosshair',
                'csp',
                'ctor',
                'ctors',
                'ctrl',
                'ctx',
                'dasherize',
                'dataset',
                'datetime',
                'dblclick',
                'deactivator',
                'dec',
                'decrement',
                'deferreds',
                'defs',
                'del',
                'dels',
                'denormalize',
                'deps',
                'desc',
                'deserialization',
                'deserialize',
                'dest',
                'dev',
                'devtool',
                'dir',
                'dirname',
                'dom',
                'donut',
                'downloader',
                'draggable',
                'draggables',
                'drilldown',
                'droppable',
                'durations',
                'dxr', // Renovated components prefix (dxrButton for example)
                'eigen',
                'elems',
                'enctype',
                'enqueue',
                'enum',
                'eql', // TestCafe
                'esc',
                'etalon',
                'etalons',
                'exceedings',
                'exchanger',
                'expander',
                'expando',
                'expr',
                'exprs',
                'extname',
                'extremum',
                'fieldset',
                'fieldsets',
                'filename',
                'focusable',
                'focusin',
                'focusout',
                'foreach',
                'formatter',
                'formatters',
                'fullscreen',
                'fullstackedarea',
                'fullstackedbar',
                'fullstackedline',
                'fullstackedspline',
                'fullstackedsplinearea',
                'func',
                'funcs',
                'gantt',
                'gaussian',
                'geo',
                'geocode',
                'geocoded',
                'geocoder',
                'getter',
                'getters',
                'gregorian',
                'guid',
                'gte',
                'haspopup',
                'hideable',
                'historyless',
                'hor',
                'horz',
                'hostname',
                'hoverable',
                'href',
                'html',
                'http',
                'idx',
                'img',
                'impl',
                'inflector',
                'infobox',
                'infos',
                'init',
                'inited',
                'intervalize',
                'invertible',
                'invoker',
                'iri',
                'iso',
                'iter',
                'jsonp',
                'keydown',
                'len',
                'linepolarseries',
                'lng',
                'localizable',
                'lookups',
                'marginate',
                'matcher',
                'matchers',
                'metadata',
                'minify',
                'mixin',
                'mixins',
                'multiline',
                'multipane',
                'multitouch',
                'namespace',
                'namespaced',
                'namespaces',
                'nav',
                'navbar',
                'noop',
                'normalizer',
                'nuget',
                'nullable',
                'num',
                'observables',
                'overline',
                'paddings',
                'param',
                'params',
                'parsers',
                'patcher',
                'pathname',
                'pdf',
                'penult',
                'polyfill',
                'polyline',
                'polymorph',
                'polynom',
                'popout',
                'popup',
                'pos',
                'postfix',
                'postfixes',
                'postprocess',
                'pre',
                'preact',
                'preload',
                'preloaded', // preloadedRowCount option name
                'prepend',
                'prerender',
                'prerendered', // prerenderedRowChunkSize option name
                'prev',
                'proj',
                'proto',
                'proxied',
                'queryable',
                'radian',
                'radians',
                'radiuses',
                'rangearea',
                'rangebar',
                'readdir',
                'rect',
                'rects',
                'registrator',
                'reinit',
                'rels',
                'renderer',
                'renderers',
                'reposition',
                'resample',
                'resampled',
                'resizable',
                'resizables',
                'resize',
                'resized',
                'resizer',
                'resizing',
                'resolvers',
                'rgb',
                'rgba',
                'roadmap',
                'rowspan',
                'rowspans',
                'sankey',
                'scalebar',
                'scatterpolarseries',
                'scrollable',
                'scrollbar',
                'scroller',
                'scrollers',
                'seg',
                'selectable',
                'semidiscrete',
                'serializers',
                'shader',
                'sortable',
                'sparkline',
                'sparklines',
                'splinearea',
                'splitter',
                'sqrt',
                'squarified',
                'squarify',
                'src',
                'stackedarea',
                'stackedbar',
                'stackedbarpolarseries',
                'stackedline',
                'stackedspline',
                'stackedsplinearea',
                'steparea',
                'stepline',
                'str',
                'strikethrough',
                'stringify',
                'struct',
                'stylesheets',
                'sublevel',
                'submenu',
                'submenus',
                'substr',
                'substring',
                'substrings',
                'subtags',
                'subvalue',
                'subvalues',
                'sugiyama',
                'svg',
                'swipeable',
                'synchronizable',
                'synchronizer',
                'tabbable',
                'tabindex',
                'tbody',
                'templated',
                'thead',
                'timeline',
                'timestamp',
                'timezones',
                'titleize',
                'tfoot',
                'tmp',
                'tmpl',
                'toolbars',
                'tooltip',
                'tooltips',
                'transclude',
                'transcluded',
                'transpile',
                'treeview',
                'turndown',
                'uid',
                'uint',
                'unary',
                'unassign',
                'unassigning',
                'undelete',
                'ungroup',
                'ungrouping',
                'unicode',
                'unlink',
                'unmap',
                'unmerge',
                'unmerged',
                'unmocked',
                'unmount',
                'unobserve', // ResizeObserver API
                'unproject',
                'unregister',
                'unselect',
                'unselected',
                'unshift',
                'untranslate',
                'updatable',
                'uploader',
                'uri',
                'utc',
                'utils',
                'validator',
                'validators',
                'vals',
                'ver',
                'vert',
                'viewport',
                'vml',
                'vue',
                'waypoint',
                'waypoints',
                'whitelist',
                'winloss',
                'workspace',
                'writeable',
                'xhr',
                'xlsx',
                'xml',
                'xmlns',
                'exdate',
                'dtstart',
                'rrule',
                'wkst',

                'acc', // DXHotelsNetApi\Client\views\currentHotel.js ?
                'adrs',
                'africa',
                'antialiasing',
                'api',
                'ar', // arabic
                'argb',  // ExcelJS
                'asia',
                'assignee',
                'assignees',
                'aug',
                'backorder',
                'backordered', // DevAV NetCore
                'bkg',
                'bg', // ExcelJS
                'br', // <br> tag in html
                'Cldr',
                'canada',
                'cityid',
                'cluster',
                'cnstl',
                'cpu',
                'datebox',
                'de',
                'ru',
                'democase',
                'democases',
                'devexpress',
                'devextremeaddon',
                'dialogs',
                'docurl',
                'dropzone',
                'dto',
                'dxkey', // for React templates
                'emp',
                'evt',
                'english',
                'eurasia',
                'europe',
                'european',
                'exe',
                'fav',
                'faved',
                'femalemiddle',
                'femaleolder',
                'femaleyoung',
                'fitted',
                'fg', // ExcelJS
                'gdp', // gross domestic product
                'geolocation',
                'globals',
                'mapGetters',
                'gif',
                'goto',
                'hotelid',
                'https',
                'iframe',
                'ity', // DXHotelsNetApi\Client\views\home.js  CIty_Image from db
                'Fmt', // ExcelJS
                'jan',
                'jspdf',
                'jszip',
                'jsserver',
                'jul',
                'july',
                'jun',
                'june',
                'Kanban',
                'lang',
                'latinamerica',
                'li',
                'loc',
                'longtabs',
                'malemiddle',
                'maleolder',
                'maleyoung',
                'maximumfractiondigits',
                'mmp',
                'monday',
                'msg',
                'nbsp',
                'nd',
                'nighly', // DXHotelsNetApi\Client\views\booking.js from db
                'northamerica',
                'objs',
                'occured',
                'oceania',
                'olympic',
                'onclick',
                'onhashchange',
                'onreadystatechange',
                'orderby',
                'pageview',
                'pangaea',
                'perc',
                'perf',
                'pivotgrid',
                'popups',
                'prec',
                'pregrouped',
                'realtor',
                'req',
                'resellers',
                'roomid',
                'sclass', // CSSClass
                'setted',
                'skype',
                'smp',
                'sonee',
                'splashscreen',
                'sqlite',
                'stacktrace',
                'startswith',
                'swfobject',
                'th',
                'td',
                'theatre',
                'transpiler',
                'ul',
                'ungrouped',
                'unordered',
                'urlencoded',
                'usa',
                'util',
                'volumne', // stockMarket, rename to volume
                'Xmla',
                'youtube',
                'ytd',
                'zipcode',
                'Serializer', // XMLSerializer
                // VectorMap Demos
                'Kosovo',
                'Macau',
                'Niue',
                'Palau',
                // JS build-in names
                'subtree', // mutation observer option
                'ai', // artificial intelligence
            ]
        }]
    }
};
