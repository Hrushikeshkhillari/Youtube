// var canvas = document.querySelector("#wrapper-canvas");

// var dimensions = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// Matter.use("matter-attractors");
// Matter.use("matter-wrap");

// function runMatter() {
//   // module aliases
//   var Engine = Matter.Engine,
//     Events = Matter.Events,
//     Runner = Matter.Runner,
//     Render = Matter.Render,
//     World = Matter.World,
//     Body = Matter.Body,
//     Mouse = Matter.Mouse,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//     Common = Matter.Common,
//     Composite = Matter.Composite,
//     Composites = Matter.Composites,
//     Bodies = Matter.Bodies;

//   // create engine
//   var engine = Engine.create();

//   engine.world.gravity.y = 0;
//   engine.world.gravity.x = 0;
//   engine.world.gravity.scale = 0.1;

//   // create renderer
//   var render = Render.create({
//     element: canvas,
//     engine: engine,
//     options: {
//       showVelocity: false,
//       width: dimensions.width,
//       height: dimensions.height,
//       wireframes: false,
//       background: "transparent",
//     },
//   });

//   // create runner
//   var runner = Runner.create();

//   // Runner.run(runner, engine);
//   // Render.run(render);

//   // create demo scene
//   var world = engine.world;
//   world.gravity.scale = 0;

//   // create a body with an attractor
//   var attractiveBody = Bodies.circle(
//     render.options.width / 2,
//     render.options.height / 2,
//     Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
//     {
//       render: {
//         fillStyle: `#000`,
//         strokeStyle: `#000`,
//         lineWidth: 0,
//       },

//       isStatic: true,
//       plugin: {
//         attractors: [
//           function (bodyA, bodyB) {
//             return {
//               x: (bodyA.position.x - bodyB.position.x) * 1e-6,
//               y: (bodyA.position.y - bodyB.position.y) * 1e-6,
//             };
//           },
//         ],
//       },
//     }
//   );

//   World.add(world, attractiveBody);

//   // add some bodies that to be attracted
//   for (var i = 0; i < 60; i += 1) {
//     let x = Common.random(0, render.options.width);
//     let y = Common.random(0, render.options.height);
//     let s =
//       Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
//     let poligonNumber = Common.random(3, 6);
//     var body = Bodies.polygon(
//       x,
//       y,
//       poligonNumber,
//       s,

//       {
//         mass: s / 20,
//         friction: 0,
//         frictionAir: 0.02,
//         angle: Math.round(Math.random() * 360),
//         render: {
//           fillStyle: "#222222",
//           strokeStyle: `#000000`,
//           lineWidth: 2,
//         },
//       }
//     );

//     World.add(world, body);

//     let r = Common.random(0, 1);
//     var circle = Bodies.circle(x, y, Common.random(2, 8), {
//       mass: 0.1,
//       friction: 0,
//       frictionAir: 0.01,
//       render: {
//         fillStyle: r > 0.3 ? `#27292d` : `#444444`,
//         strokeStyle: `#000000`,
//         lineWidth: 2,
//       },
//     });

//     World.add(world, circle);

//     var circle = Bodies.circle(x, y, Common.random(2, 20), {
//       mass: 6,
//       friction: 0,
//       frictionAir: 0,
//       render: {
//         fillStyle: r > 0.3 ? `#334443` : `#222222`,
//         strokeStyle: `#111111`,
//         lineWidth: 4,
//       },
//     });

//     World.add(world, circle);

//     var circle = Bodies.circle(x, y, Common.random(2, 30), {
//       mass: 0.2,
//       friction: 0.6,
//       frictionAir: 0.8,
//       render: {
//         fillStyle: `#191919`,
//         strokeStyle: `#111111`,
//         lineWidth: 3,
//       },
//     });

//     World.add(world, circle);
//   }

//   // add mouse control
//   var mouse = Mouse.create(render.canvas);

//   Events.on(engine, "afterUpdate", function () {
//     if (!mouse.position.x) return;
//     // smoothly move the attractor body towards the mouse
//     Body.translate(attractiveBody, {
//       x: (mouse.position.x - attractiveBody.position.x) * 0.12,
//       y: (mouse.position.y - attractiveBody.position.y) * 0.12,
//     });
//   });

//   // return a context for MatterDemo to control
//   let data = {
//     engine: engine,
//     runner: runner,
//     render: render,
//     canvas: render.canvas,
//     stop: function () {
//       Matter.Render.stop(render);
//       Matter.Runner.stop(runner);
//     },
//     play: function () {
//       Matter.Runner.run(runner, engine);
//       Matter.Render.run(render);
//     },
//   };

//   Matter.Runner.run(runner, engine);
//   Matter.Render.run(render);
//   return data;
// }

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// function setWindowSize() {
//   let dimensions = {};
//   dimensions.width = $(window).width();
//   dimensions.height = $(window).height();

//   m.render.canvas.width = $(window).width();
//   m.render.canvas.height = $(window).height();
//   return dimensions;
// }

// let m = runMatter();
// setWindowSize();
// $(window).resize(debounce(setWindowSize, 250));



var canvas = document.querySelector("#wrapper-canvas");

var dimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Initialize plugins
Matter.use("matter-attractors");
Matter.use("matter-wrap");

function runMatter() {
  // module aliases
  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create();

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  // create renderer
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: "transparent",
    },
  });

  // create runner
  var runner = Runner.create();

  // create demo scene
  var world = engine.world;
  world.gravity.scale = 0;

  // create a body with an attractor
  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      render: {
        fillStyle: `#000`,
        strokeStyle: `#000`,
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  // Custom color palette
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#57FF33', '#FF9F33', '#76448A', '#E74C3C'];

  // Function to create trapezoid
  function createTrapezoid(x, y, w, h) {
    return Bodies.trapezoid(x, y, w, h, Common.random(0.4, 0.9), {
      mass: w / 30,
      friction: 0,
      frictionAir: 0.02,
      render: {
        fillStyle: colors[Math.floor(Common.random(0, colors.length))],
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });
  }

  // Function to create custom star shape
  function createStar(x, y, radius) {
    return Bodies.polygon(x, y, 5, radius, {
      mass: radius / 30,
      friction: 0,
      frictionAir: 0.02,
      render: {
        fillStyle: colors[Math.floor(Common.random(0, colors.length))],
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });
  }

  // Function to create an irregular polygon with random vertices
  function createIrregularPolygon(x, y, sides, radius) {
    let path = '';
    for (let i = 0; i < sides; i++) {
      let angle = Common.random(0, 2 * Math.PI);
      let length = Common.random(radius / 2, radius);
      let px = Math.cos(angle) * length;
      let py = Math.sin(angle) * length;
      path += `${px},${py} `;
    }

    return Bodies.fromVertices(x, y, Matter.Vertices.fromPath(path), {
      mass: radius / 20,
      friction: 0,
      frictionAir: 0.02,
      render: {
        fillStyle: colors[Math.floor(Common.random(0, colors.length))],
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });
  }

  // Add irregular shapes and variety of geometry
  for (var i = 0; i < 80; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let size = Common.random(20, 80);
    let shapeType = Common.random(0, 3); // 0: trapezoid, 1: star, 2: irregular polygon

    let body;

    if (shapeType === 0) {
      body = createTrapezoid(x, y, size, size / 2);
    } else if (shapeType === 1) {
      body = createStar(x, y, size / 2);
    } else {
      let sides = Common.random(3, 8);
      body = createIrregularPolygon(x, y, sides, size);
    }

    World.add(world, body);
  }

// Add mouse control for interactivity
var mouse = Mouse.create(render.canvas);

Events.on(engine, "afterUpdate", function () {
  if (!mouse.position.x) return;

  // Iterate over all bodies in the world
  Composite.allBodies(engine.world).forEach(function (body) {
    var dx = mouse.position.x - body.position.x;
    var dy = mouse.position.y - body.position.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      // Apply a repulsive force if the mouse is within a certain range
      var forceMagnitude = 0.0005 * body.mass * -1; // Negative to push away
      Body.applyForce(body, body.position, {
        x: (dx / distance) * forceMagnitude,
        y: (dy / distance) * forceMagnitude,
      });
    }
  });
});


  // return a context for MatterDemo to control
  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    play: function () {
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    },
  };

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function setWindowSize() {
  let dimensions = {};
  dimensions.width = $(window).width();
  dimensions.height = $(window).height();

  m.render.canvas.width = $(window).width();
  m.render.canvas.height = $(window).height();
  return dimensions;
}

let m = runMatter();
setWindowSize();
$(window).resize(debounce(setWindowSize, 250));

