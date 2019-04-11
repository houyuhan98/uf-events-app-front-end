angular.module('eventLists').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.eventLists = Listings;
    $scope.detailedInfo = window.location.hash == "" ? undefined : $scope.eventLists[parseInt(window.location.hash.substring(1))];
    
    $scope.showDetails = function(index) {
      window.location.href = "eventsinfo.html#" + index;
    };

    $scope.category = {
      first : '',
      second: '',
      third:'',
      four:'',
      five:'',
      six:''
    };

    $scope.time = {
      first : '',
      second: '',
      third:'',
      four:'',
      five:'',
      six:''
    };

    $scope.location = {
      first : '',
      second: '',
      third:'',
      four:'',
      five:'',
      six:'',
      seven:''
    };

  }]);

  var loginApp = angular.module('myLoginApp', []);
  loginApp.controller('myLoginCtrl', function($scope, $http) {
  $scope.isLoggedIn = false;
  $scope.submit = function() {
    var shouldSubmit="false";
  angular.forEach($scope.loginData, function(credential){
                    if((credential.Gatorlink==$scope.Gatorlink)&&(credential.Password==$scope.password))
                    {
                      shouldSubmit="true";
                    }
                 
                 });
  $scope.Gatorlink="";
  $scope.Password="";
    if(shouldSubmit=="true") {
      console.log("Success!");
      $scope.isLoggedIn = true;
      location.href = "home.html";         
    }
    else
      alert("Sorry, your credentials are incorrect. Please try again!");
    };     

    $scope.Gatorlink="";
    $scope.Password="";

  $scope.loginData;
  $http.get("https://api.myjson.com/bins/x04vy")
    .then(function(response) {
        $scope.loginData = response.data;
         angular.forEach($scope.loginData, function(credential){
                    console.log(credential);

                 }) 
    });      
});


var postEvent = angular.module('eventSubmission', []);
postEvent.controller('createEventController', ['$scope', function($scope, fs) {
// create event by editing "json" file (IMPORTANT: ASSUMES THE "JSON" FILE IS SETUP TO HOLD ENTRIES)
// im so sorry for how disgusting this portion is, i didnt want to mess with the listingFactory file but the listingFactory file is in the format of js instead of JSON so i didnt know how else to do it
$scope.img = "";
$scope.name = "";
$scope.category = "";
$scope.brief = "";
$scope.date = "";
$scope.time = "";
$scope.location = "";
$scope.detail = "";
$scope.promotion = "";

$scope.createEvent = function() {
// store listingFactory text into string var
// try {
//   var text =  fs.readFileSync('listingFactory.js', 'utf8');
// } catch (error) {
//   console.log(error);
// }


// find location of last end bracket ']' (-1 to get to the front of the bracket, -7 to through 6 spaces and a \n)
// var location = text.lastIndexOf("]") - 1 - 7;

// split text into 2 parts to concatenate later
// var text1 = text.slice(0, location);
// var text2 = text.slice(location, text.length - 1);

// insert new event right before it (needs "           " spaces for proper formatting)
// split up the process of making the string to insert to make it easier to read and edit
var insertText = "\n           {\n";
insertText += "           \"img\": \"" + $scope.img + "\",\n";
insertText += "           \"name\": \"" + $scope.name + "\",\n";
insertText += "           \"category\": \"" + $scope.category + "\",\n";
insertText += "           \"brief\": \"" + $scope.brief + "\",\n";
insertText += "           \"date\": \"" + $scope.date + "\",\n";
insertText += "           \"time\": \"" +  $scope.time + "\",\n";
insertText += "           \"location\": \"" +  $scope.location + "\",\n";
insertText += "           \"detail\": \"" +  $scope.detail + "\",\n";
insertText += "           \"promotion\": \"" +  $scope.promotion + "\",\n";
insertText += "           }\n";

// var newText = text1 + insertText + text2;

console.log(insertText);

// try {
//   fs.writeFileSync('listingFactory.js', newText);
// } catch (error) {
//   console.log(error);
// }

location.href = 'home.html';
}
}]);