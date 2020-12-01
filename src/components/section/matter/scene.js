import React, { Component } from "react";
import Matter from "matter-js";

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.outerWidth,
      height: 450,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    if(this.m) {
      this.m.canvas.width = this.state.width
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);

    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();

    const render = Render.create({
      element: this.refs.scene,
      engine,
      options: {
        width: this.state.width,
        height: this.state.height,
        wireframes: false,
        background: "#fff",
      },
    });

    const styles = [
      { fillStyle: "#005eff" },
      { fillStyle: "#f4004d" },
      { fillStyle: "#fff", strokeStyle: "#CDCDCD", lineWidth: 5}
    ]
    const generateBall = () => {
      return Bodies.circle(
        Math.random() * this.state.width - 30 + 30,
        Math.random() * 50 + 50,
        30,
        { restitution: 0.5, render: styles[Math.floor(Math.random() * styles.length)]}
      );
    };
    const generatePolygon = () => {
      let s = Math.random() > 0.6 ? (Math.random() * 40) + 20 : (Math.random() * 20) + 10
      return Bodies.polygon(
        Math.random() * this.state.width - 30 + 30,
        Math.random() * 50 + 50,
        Math.floor(Math.random() * 5),
        s,
        {
          mass: s / 20,
          angle: Math.round(Math.random() * 360),
          render: styles[Math.floor(Math.random() * styles.length)]
        }
      );
    }

    let balls = []
    for(let i = 0; i < 60; i++) {
      balls.push(i % 2 === 0 
        ? generatePolygon() 
        : generateBall()
      )
    }

    World.add(engine.world, [
      Bodies.rectangle(
        this.state.width / 2,
        this.state.height,
        this.state.width * 1.1,
        75,
        { isStatic: true }
      ),
    ]);

    World.add(engine.world, balls);

    const mouse = Mouse.create(render.canvas);

    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);
    Engine.run(engine);
    Render.run(render);

    this.m = render
  }

  render() {
    return <div ref="scene"></div>;
  }
}

export default Scene;
