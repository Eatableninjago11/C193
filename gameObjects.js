AFRAME.registerComponent("asteroids", {
    init: function() {
        posX: -20;
        posZ:85;
    
    
    for (var i = 0; i < 10; i++) {
        //create asteroid entity
        var asteroid1 = document.createElement("a-entity");
        var asteroid2 = document.createElement("a-entity");
        var asteroid3 = document.createElement("a-entity");
        var asteroid4 = document.createElement("a-entity");
        var asteroid5 = document.createElement("a-entity");
        var asteroid6 = document.createElement("a-entity");


        //Set X, Y , Z positions

        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;

        // Scale
        var scale = {x: 50, y: 50, z: 50};

        //set the id
      asteroid1.setAttribute("id", "asteroid1" + i);
      asteroid2.setAttribute("id", "asteroid2" + i);
      asteroid3.setAttribute("id", "asteroid3" + i);
      asteroid4.setAttribute("id", "asteroid4" + i);
      asteroid5.setAttribute("id", "asteroid5" + i);
      asteroid6.setAttribute("id", "asteroid6" + i);


      //set the position
      asteroid1.setAttribute("position", { x: posX, y: 5, z: -35 });
      asteroid2.setAttribute("position", { x: posX, y: 5, z: 85 });
      asteroid3.setAttribute("position", { x: -30, y: 5, z: posZ });
      asteroid4.setAttribute("position", { x: 50, y: 5, z: posZ });
      asteroid5.setAttribute("position", { x: 60, y: 5, z: posZ });
      asteroid6.setAttribute("position", { x: 70, y: 5, z: posZ });


      //set the scale
      asteroid1.setAttribute("scale", scale);
      asteroid2.setAttribute("scale", scale);
      asteroid3.setAttribute("scale", scale);
      asteroid4.setAttribute("scale", scale);
      asteroid5.setAttribute("scale", scale);
      asteroid6.setAttribute("scale", scale);

      //Set Model
      asteroid1.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );

      asteroid2.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid3.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid4.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid5.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );
      asteroid6.setAttribute(
        "gltf-model",
        "./Models/asteroid/scene.gltf"
      );

       //set the physics body
       asteroid1.setAttribute("static-body", {});
       asteroid2.setAttribute("static-body", {});
       asteroid3.setAttribute("static-body", {});
       asteroid4.setAttribute("static-body", {});
       asteroid5.setAttribute("static-body", {});
       asteroid6.setAttribute("static-body", {});

       var sceneEl = document.querySelector("#scene");
       //attach the entity to the scene
       sceneEl.appendChild(asteroid1);
       sceneEl.appendChild(asteroid2);
       sceneEl.appendChild(asteroid3);
       sceneEl.appendChild(asteroid4);
       sceneEl.appendChild(asteroid5);
       sceneEl.appendChild(asteroid6);
 
    }
  },
});
//boxes
AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 2 },
    width: { type: "number", default: 2 },
    depth: { type: "number", default: 2 },
  },
  init: function () {

    //x position array
    px = [22.86, -17.35, -12.81, 0.44, -30.18,
      -25.89, 15.61, 29.68, 11.95, -15.40,
      -14.09, 34.76, 2.29, 21.77, 1.57,
      34.72, 12.04, -10.90, 6.48, 15.66];

    //z position array
    pz = [54.56, -4.71, 14.91, 56.74, 41.13,
      50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22,
      26.72, 48.90, 27.24, 9.94, 54.29 ];

    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-entity");

      posX = px[i];
      posY = 1;
      posZ = pz[i];

      position = { x: posX, y: posY, z: posZ };

      box.setAttribute("id", "box" + i);      
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
        primitive: "box",
        height: this.data.height,
        width: this.data.width,
        depth: this.data.depth,
      });

      box.setAttribute("material", {
        src: "./assets/boxtexture1.jpg",
        repeat: "1 1 1",
      });

      box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});