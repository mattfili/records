angular
.module('records')

.factory('auth', function($http) {
  return {
      
      login: function (user) {
        $http('/auth/signin', user)
        .success(function() {
          console.log('signed in')
        })
      },

      singup: function (user) {
        $http('/auth/signup', user)
          .success(function() {
            console.log('signed up')
          })
      },

      signout: function () {
        $http('/auth/signout')
          .success(function() {
            console.log('sign out')
          })
      }
  }

})
