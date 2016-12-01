var ASTEROIDS = (function (module) {
    module.CollisionDetection = {
        // check if spheres collide
        // check if the sphere's centers is less than or equal to the sum of their radii
        intersect: function (sphere, other) {

            var distance = Math.sqrt((sphere.x - other.x) * (sphere.x - other.x) +
                (sphere.y - other.y) * (sphere.y - other.y) +
                (sphere.z - other.z) * (sphere.z - other.z));

            return distance < (sphere.radius + other.radius);
        },

        // check if sphere collides with any sphere in spheres
        checkCollision: function (spheres, sphere) {
            // how do we call checkCollision?
            // event driven, time driven...
            var i = 0;

            for(i; i < spheres.length; i+=1 ) {
                if (module.CollisionDetection.intersect(sphere, spheres[i]) === true) {
                    // what do we return
                    // do we break on first collision detection
                    return true;
                }
            }

        }
    };

    return module;
})(ASTEROIDS || {});
