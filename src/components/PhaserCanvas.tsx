import { createGesture } from '@ionic/react'
import React, { useRef, useEffect, useState } from 'react'
import { useWindowSize } from './WindowSize'
import { draw, onSwipeUp } from './Draw';
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";
const Canvas : React.FC = props => {

  const windowSize = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let game: Phaser.Game;
  const canvasData = {
    x: 20,
    xspeed: 10,
    yspeed: 10,
    y: 20,
    r: 20,
    s: 0,
    end: 2*Math.PI,
    mult: 1.2,
    numSwipes: 0
  };
  
  const preload = () => {

  };
  const create = () => {

  };
  const update = () => {

  };
  const animationStarted = () => {

  };
  const animationLooped = () => {

  };
  const animationStopped = () => {

  };
  useEffect(() => {
    //set up our animation canvas
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    let frameCount = 0
    let animationFrameId: number;
    //Our draw came here
    const render = () => {
      frameCount++
      if (context){
        draw(context, frameCount, canvasData)
        animationFrameId = window.requestAnimationFrame(render)
      }
       
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  useEffect(() => {

    let game = document.querySelectorAll("#main-game");
    const can = game[0];
    const gesture = createGesture({
      el: can,
      direction: 'y',
      disableScroll: true,
      gestureName: "my-swipe",
      
      onStart: event => {
        //console.log("onStart", event);
        onSwipeUp(canvasData, event);
      },
      onMove: event => {
        //console.log("deltaY", event.deltaY);
      }
    });
    gesture.enable(true);
    game = new Phaser.Game(
      windowSize.width,
      windowSize.height * 0.9,
      Phaser.AUTO,
      'phaser-example',
      { 
        preload: preload, 
        create: create, 
        update: update 
      }
    );

  }, []);

  
  
  return <div>
    <canvas 
      id='main-game'
      width={windowSize.width} 
      height={windowSize.height * 0.9}
      ref={canvasRef} 
    />
  </div>;
}

export default Canvas