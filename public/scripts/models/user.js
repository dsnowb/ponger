'use strict';


(function(module) {

  function User(obj) {
    for (let prop in obj) this[prop] = obj[prop];
  }

  User.prototype.insert = function() {
    $.ajax({
      url: `${__API_URL__}/`,
      method: 'POST',
      data: {username: this.username, first_name: this.first_name, last_name: this.last_name},
      success: result => { console.log(result); },
    });
  }

  User.prototype.fetch = function() {
    $.ajax({
      url: `${__API_URL__}/`,
      method: 'GET',
      success: result => { console.log(result); },
    });
  }

  app.User = User;
})(app);
