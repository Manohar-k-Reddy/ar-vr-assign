document.addEventListener("DOMContentLoaded", function() {

    const objects = document.querySelectorAll(".clickable");

    objects.forEach(obj => {

        obj.addEventListener("click", function() {

            let body = obj.body;

            if (body) {

                body.applyImpulse({ x: 0, y: 5, z: -3 }, { x: 0, y: 0, z: 0 });

            }

        });

    });

});