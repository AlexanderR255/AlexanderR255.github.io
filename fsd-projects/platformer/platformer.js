$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(200, 700, 100, 20, "violet");
     createPlatform(300, 600, 100, 20, "black");
     createPlatform(600, 500, 80, 20, "red");
     createPlatform(1000, 500, 100, 20, "white");
     createPlatform(1300, 400, 100, 20, "blue");
     createPlatform(1100, 300, 50, 10, "yellow");
     createPlatform(800, 200, 100, 20, "green");



    // TODO 3 - Create Collectables
     createCollectable("steve", 600, 170, 0.5, 0.7);
     createCollectable("database", 1300, 170, 0.5, 0.7);
     createCollectable("max", 800, 170, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("left", 300, 2000)
    createCannon("bottom", 900, 2500)
    createCannon("right", 200, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
