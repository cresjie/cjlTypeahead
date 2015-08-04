# cjlTypeahead
angular typeahead

# Requirements
* [jQuery][jquery] v1.6+
* [Angular.js][angularjs]
* [typeahead.js][typeahead.js] v0.10.x

[angularjs]: http://angularjs.org/
[typeahead.js]: http://twitter.github.io/typeahead.js/
[jQuery]: http://jquery.com/

Usage
---------------
```html
<body ng-controller="MyController">
  <input type="text" name="search" class="typeahead" cjl-typeahead="cj" typeahead-options="null" typeahead-datasets="typeaheadDatasets" placeholder="search user">
  <!--
    Directive: cjl-typeahead
      Attributes:
              * typeahead-options - this will be passed to the typeahead constructor
              * typeahead-datasets - this will be passed to the typeahead constructor
  -->
  </body>
```
```javascript
  var app = angular.module('app',['cjl.typeahead']);
  app.controller('MyController',function($scope){
      
      $scope.$watch('typeahead',function(o,typeahead){
          // we name the directive "cjl-typeahead" - myTypeahead
          // use the method "$on" to listen to events
					typeahead.myTypeahead.$on('typeahead:selected',function(e,selected){
						$scope.selectedData = selected;
					});

					typeahead.myTypeahead.$on('typeahead:cursorchange',function(e, selected, p){
						console.log(selected);
					});

				});
				
      $scope.typeaheadDatasets={
						display:['name'],
						source:function(q,cb){
							cb(users);
						}
				}
				
  });
```
