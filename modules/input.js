/**
 *
 * buffer - user input state represented as tiny int
 *      0 - off
 *      1 - on
 *
 * buffer index representation
 *      0 - buffer[0]: left
 *      1 - buffer[1]: up
 *      2 - buffer[2]: right
 *      3 - buffer[3]: down
 *      4 - buffer[4]: pause
 *      5 - buffer[5]: stop
 *      6 - buffer[6]: start
 */
var ASTEROIDS = (function(module){
    var input = module.Input = {};

    var buffer = [0,0,0,0,0,0];

    // wasd, arrows, space
    input.changeKey = function(which, to) {
        switch (which) {
            // left
            case 'ArrowLeft':
            case 'a':
              buffer[0] = to;
              break;

            // up
            case 'ArrowUp':
            case 'w':
              buffer[2] = to;
              break;

            // right
            case 'ArrowRight':
            case 'd':
              buffer[1] = to;
              break;

            // down
            case 'ArrowDown':
            case 's':
              buffer[3] = to;
              break;

            // space bar / pause
            case 'p':
            case ' ':
            case 'Spacebar':
              buffer[4] = to;
              break;

            // Esc / stop
            case 'Escape':
              buffer[5] = to;
              break;

            // Start / restart
            case 'Enter':
              buffer[6] = to;
              break;
        }
    };

    //TODO: attach handlers for keyboard events and populate buffer
    document.addEventListener('keydown', function(e) {
        console.log('keydown', e, e.key);
        input.changeKey(e.key, 1)
    });

    document.addEventListener('keyup', function(e) {
        input.changeKey(e.key, 0)
    });

    input.getBuffer = function() {
        return buffer.slice();
    };

    return module;
})(ASTEROIDS || {});