var ASTEROIDS = (function (module) {
    module.CollisionDetection = {
        // check if the sphere's centers is less than or equal to the sum of their radii
        intersect: function (sphere, other) {

            var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                (sphere.y - other.y) * (sphere.y - other.y) +
                (sphere.z - other.z) * (sphere.z - other.z));
            
            return distance < (sphere.radius + other.radius);
        },
        // get asteroids
        init: function () {
            // collide
        }
    };
    return module;
})(ASTEROIDS || {});
