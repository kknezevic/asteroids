var ASTEROIDS = (function(module){
    var input = module.Input = {};

    //TODO: attach handlers for keyboard events and populate buffer

    var buffer = [];
    input.getBuffer = function() {
        return buffer.slice();
    }
    return module;
})(ASTEROIDS || {});
