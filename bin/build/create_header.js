var pkg = require('./../../package.json');

var string = '# Apache Server Configs v' + pkg.version + ' | ' + pkg.license.type +' License\n' +
             '# ' + pkg.homepage + '\n\n';

process.stdout.write(string);
