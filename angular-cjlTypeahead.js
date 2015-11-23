(function(angular, window,directiveName){
	angular.module('cjl.typeahead',[]).directive(directiveName,function(){
		return {
			restrict: 'AC',
			
			link:function(scope, element,attrs){
				
					element.typeahead(scope.$eval(attrs.typeaheadOptions), scope.$eval(attrs.typeaheadDatasets) );

					element.$on = function(event, callback){
						element.on(event,function(event, obj, obj2){
							callback.call(this,event, obj, obj2);
							scope.$apply();
						});
					};

					if( !scope.typeahead )
						scope.typeahead = {};

					scope.typeahead[attrs[directiveName]] = element;
					

				}
			
		};
	});
})(angular,window,'cjlTypeahead');
