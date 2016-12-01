var ASTEROIDS = (function(module){
    var model = module.Model = {};
    module.init = function() {
        model.asteroids = module.AsteroidManager.generate();
        model.player = module.PlayerManager.create();
        module.Renderer.init();
        module.TimeSync.init(module.GameManager);
    }

    return module;
})(ASTEROIDS || {});