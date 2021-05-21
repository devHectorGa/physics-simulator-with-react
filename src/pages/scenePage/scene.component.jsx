import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Container } from './scene.styles';

function Scene() {
  const refScene = useRef();
  const canvasRef = useRef();

  const width = window.innerWidth;
  const height = window.innerHeight - 75;

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const render = Render.create({
      element: refScene.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        showAngleIndicator: true,
        showCollisions: true,
        showVelocity: true,
      },
    });

    const ballA = Bodies.circle(width / 2, 10, 30, {
      restitution: 0.5,
    });
    const ballB = Bodies.circle(10, 20, 30, { restitution: 0.5 });

    World.add(engine.world, [
      Bodies.rectangle(width / 2 + 1, height - 26, width, 50, {
        isStatic: true,
      }),
      Bodies.rectangle(width - 101, height / 2, 200, 20, { isStatic: true }),
    ]);

    World.add(engine.world, [ballA, ballB]);

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, 'mousedown', () => {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Runner.run(engine);

    Render.run(render);
  }, []);

  return (
    <Container ref={refScene}>
      <canvas ref={canvasRef} />
    </Container>
  );
}

export default Scene;
