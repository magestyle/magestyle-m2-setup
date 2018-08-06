'use strict';

var defaultGruntfile    = require('./Gruntfile'),
    _                   = require('underscore');


var m2baseGruntfile = {};

m2baseGruntfile.watch         = require('./app/design/frontend/Magestyle/m2base/web/grunt/watch');
m2baseGruntfile.browserSync   = require('./app/design/frontend/Magestyle/m2base/web/grunt/browserSync');

module.exports = _.extend(defaultGruntfile, m2baseGruntfile);
