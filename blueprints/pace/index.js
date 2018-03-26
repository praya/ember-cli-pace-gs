var RSVP = require('rsvp');

module.exports = {  
  normalizeEntityName: function() {},

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('pace-progress'),
    ]);
  }
};