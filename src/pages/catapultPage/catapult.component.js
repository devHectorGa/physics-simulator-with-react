import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Container } from './catapult.styles';

function Catapult() {
  const refScene = useRef();
  const canvasRef = useRef();

  const width = window.innerWidth;
  const height = window.innerHeight - 75;

  useEffect(() => {
    const center = { x: 190, y: height - 130 };

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
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
        background: 'var(--secondary2)',
        wireframes: process.env.NODE_ENV !== 'production',
      },
    });

    Render.run(render);

    const flat = Bodies.rectangle(width / 2, height - 10, width + 2, 40, {
      isStatic: true,
      render: { fillStyle: '#060a19' },
    });

    const horizontalBase = Bodies.rectangle(center.x, center.y + 90, 320, 20, {
      isStatic: true,
    });

    const verticalBase = Bodies.rectangle(center.x + 70, center.y, 20, 160, {
      isStatic: true,
    });

    const horizontalWithMovement = Bodies.rectangle(
      center.x + 10,
      center.y - 70,
      300,
      20,
      { isStatic: true }
    );

    const verticalWithMovement = Bodies.rectangle(
      center.x - 130,
      center.y - 100,
      20,
      40,
      { isStatic: true }
    );

    const runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      flat,
      horizontalBase,
      verticalBase,
      horizontalWithMovement,
      verticalWithMovement,
    ]);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });
  }, [width, height]);

  return (
    <Container ref={refScene}>
      <canvas ref={canvasRef} />
    </Container>
  );
}

export default Catapult;
