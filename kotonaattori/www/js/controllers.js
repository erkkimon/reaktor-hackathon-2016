angular.module('app.controllers', [])

.controller('kotonaattoriCtrl', function($scope) {

})

.controller('faktaCtrl', function($scope) {

})

.controller('kYtNnTCtrl', function($scope) {

})

.controller('suomalaisuusCtrl', function($scope) {

})

.controller('kieliCtrl', function($scope) {


  var randomSanat = [
  								{sana: 'Auto'},
  								{sana: 'Vene'},
  								{sana: 'Ankkuri'},
  								{sana: 'Kissa'},
  								{sana: 'Koira'},
  								{sana: 'Leivinpaperi'}
  							];

  var vastaukset = [
  								{sana: 'auto', kuva: 'img/auto.png', vastaus: 'joo'},
  								{sana: 'keksi', kuva: 'img/keksi.png', vastaus: 'joo'}
  							];

  var items = [];

  getRandom();

  function getRandom(){
  	var rand1 = getOneRandom();
  	var rand2 = getOneRandom();
  	var rand3 = getAnswer();
  	if (rand1 === rand2){
  		rand2 = getOneRandom();
  	}
  	items.push(rand1, rand2, rand3);
    $scope.vaihtoehdot = shuffle(items);

  	for (var i = 0; i < $scope.vaihtoehdot.length; i++) {
  		if($scope.vaihtoehdot[i].kuva){
  			$scope.kuva = $scope.vaihtoehdot[i].kuva;
  		}
  	}
  };

  function getOneRandom () {
  	return randomSanat[Math.floor(Math.random() * randomSanat.length)];
  }

  function getAnswer () {
  	return vastaukset[Math.floor(Math.random() * vastaukset.length)];
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  $scope.checkAnswer = function(answer){
  	if (answer === "joo"){
  		$scope.tulos = "oikein";
  	}else {
  		$scope.tulos = "vaarin"
  	}
  }

  $scope.again = function() {
  	window.location.reload()
  }

})

.controller('turvapaikkahakemusCtrl', function($scope) {

})
   
.controller('tehtVCtrl', function($scope, $ionicPopup) {
  $scope.correctOrNot = function(yesOrNo) {
      var title = ""
      var message = ""
      if (yesOrNo === true) {
        title = "Niceness!"
        message = "That's correct!"
      } else {
        title = "Oh no!"
        message = "Unfortunately that was wrong!"
      }
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: message
      });
      console.log("Turkanen")
  }
})
