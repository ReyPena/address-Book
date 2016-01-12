app.controller("peopleCtrl",function ($scope) {
  $scope.people=[
    {
      name:"Rey",
      phone:"884654312135",
      email:"email@mail.send"
    },
    {
      name:"Andres",
      phone:"884654312135",
      email:"email@mail.send"
    },
    {
      name:"Borja",
      phone:"884654312135",
      email:"email@mail.send"
    }
  ];

  // this show the form
  $scope.showForm =function () {
    $scope.formNew = true;
  };
  // this is the from hide by default
  $scope.formNew = false;

  // this save the person and hide the form

  $scope.save = function () {
    $scope.people.push({name:$scope.newContac.name, phone:$scope.newContac.phone, email:$scope.newContac.email});
    $scope.newContac = "";
    $scope.formNew = false;
  };


});
