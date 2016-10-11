angular.module("JavaScript_DOM_Manipulation_Practice").directive("domDir", function($document) {
var link = function(scope, element) {
    scope.name = "Vacations";
    var startX = 0,
        startY = 0,
        x = 0,
        y = 0;
    element.css({
        position: 'relative',
        border: '1px solid red',
    });
    element.on('mousedown', function(event) {
        event.preventDefault();
        startX = event.pageX - x;
    })
})
}
