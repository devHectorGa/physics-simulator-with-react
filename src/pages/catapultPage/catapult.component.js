import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Container } from './catapult.styles';

function Catapult() {
  const refScene = useRef();
  const canvasRef = useRef();

  const width = window.innerWidth;
  const height = window.innerHeight - 75;

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Vector = Matter.Vector;

    const engine = Engine.create(),
      world = engine.world;

    const render = Render.create({
      element: refScene.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        showAngleIndicator: true,
        showCollisions: true,
        showVelocity: true,
        // wireframes: false,
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const group = Body.nextGroup(true);

    const stack = Composites.stack(250, 255, 1, 6, 0, 0, (x, y) =>
      Bodies.rectangle(x, y, 30, 30)
    );

    const catapult = Bodies.rectangle(400, 520, 320, 20, {
      collisionFilter: { group },
    });

    Composite.add(world, [
      stack,
      catapult,
      Bodies.rectangle(400, 600, 800, 50.5, {
        isStatic: true,
        render: { fillStyle: '#060a19' },
      }),
      Bodies.rectangle(250, 555, 20, 50, {
        isStatic: true,
        render: { fillStyle: '#060a19' },
      }),
      Bodies.rectangle(400, 535, 20, 80, {
        isStatic: true,
        collisionFilter: { group },
        render: { fillStyle: '#060a19' },
      }),
      Bodies.rectangle(400, 535, 20, 80, {
        isStatic: true,
        collisionFilter: { group },
        render: { fillStyle: '#060a19' },
      }),
      Bodies.circle(560, 100, 50, { density: 0.005 }),
      Constraint.create({
        bodyA: catapult,
        pointB: Vector.clone(catapult.position),
      }),
    ]);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });
  }, []);

  return (
    <Container ref={refScene}>
      <canvas ref={canvasRef} />
    </Container>
  );
}

export default Catapult;
