import { createGesture } from '@ionic/react'
import React, { useRef, useEffect, useState } from 'react'
import { useWindowSize } from './WindowSize'
import { draw, onSwipeUp } from './Draw';
import { RouteComponentProps } from 'react-router';

interface ContainerProps extends RouteComponentProps<{}> {
  level: string;
}

const Canvas : React.FC<ContainerProps> = ({ history, level }) => {

  const windowSize = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasData, setCanvasData] = useState({
    x: 20,
    xspeed: 10,
    yspeed: 10,
    y: 20,
    r: 20,
    s: 0,
    end: 2*Math.PI,
    mult: 1.2,
    numSwipes: 0
  });

  useEffect(() => {
    console.log(level, canvasData.numSwipes);
    setCanvasData({
      ...canvasData,
      numSwipes: 0,
      r: 10
    })
  }, [level]);
  
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
        draw(context, frameCount, canvasData, history)
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