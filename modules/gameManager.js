var ASTEROIDS = (function(module){
    var game = module.GameManager = {};

    //TODO: GameManager implementation, game loop that invokes methods based on state and time delta
    game.loop = function(delta) {
        var buffer = module.Input.getBuffer();
        module.Renderer.render();
        //TODO: state machine implementation
    } 

    return module;
})(ASTEROIDS || {});