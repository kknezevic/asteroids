var ASTEROIDS = (function(module){
    module.TimeSync = {
        init: function(gameManager) {
            setInterval(function() {
                gameManager.loop(1);
            }, 10);
        }
    };
    return module;
})(ASTEROIDS || {});
