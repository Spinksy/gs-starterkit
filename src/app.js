var controllers = angular.module('gsApp.controllers', []);

angular.module('gsApp', [
    'gsApp.controllers'
])
.config(gsAppConfig)
.run(gsAppRun);

gsAppConfig.$inject = [];
function gsAppConfig(){

}

gsAppRun.$inject = [];
function gsAppRun(){

}
