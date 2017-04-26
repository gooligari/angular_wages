import auth from './authentication';

let apiModule = angular.module('app.api', [
  auth.name,
])


export default apiModule;
