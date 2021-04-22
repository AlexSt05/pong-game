import { createGesture } from '@ionic/react'
import React, { useRef, useEffect, useState } from 'react'
import { useWindowSize } from './WindowSize'
import { draw, onSwipeUp } from './Draw';

const Canvas : React.FC = props => {

  const windowSize = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasData = {
    x: 20,
    xspeed: 10,
    yspeed: 10,
    y: 20,
    r: 20,
    s: 0,
    end: 2*Math.PI,
    mult: 1.2,
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
        console.log("onStart", event);
        onSwipeUp(canvasData);
      },
      onMove: event => {
        console.log("deltaY", event.deltaY);
      }
    });
    gesture.enable(true);
  }, []);

  
  
  return <div>
    <canvas 
      id='main-game'
      width={windowSize.width} 
      height={windowSize.height * 0.8}
      ref={canvasRef} 
    />
  </div>;
}

export default Canvas