(function(controllers){

    controllers.controller('homeController', homeController);

    homeController.$inject = [];

    function homeController(){

        var vm = this;
        vm.title = 'Starter Kit';


    }

})(controllers)