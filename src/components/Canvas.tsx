import { createGesture } from '@ionic/react'
import React, { useRef, useEffect } from 'react'
import { useWindowSize } from './WindowSize'

const Canvas : React.FC = props => {
  const windowSize = useWindowSize()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let x = 20
  let xspeed = 10
  let yspeed = 10
  let y = 20
  const r = 20
  const s = 0
  const end = 2*Math.PI
  
  const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
    ctx.fillStyle = '#999999'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.ellipse(x, y, r, r, 0, s, end)
    ctx.fill()
    x+=xspeed
    y+=yspeed
    
    if (x>ctx.canvas.width){
      xspeed=-10
    }
    if (x<0){
      xspeed= 10
    }
    if (y>ctx.canvas.height){
      yspeed=-10
    }
    if (y<0){
      yspeed= 10
    }
  }

  const getScreenSize = () => {
      //window.innerWidth
      //window.innerHeight
      return window.innerWidth
      
  };

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    let frameCount = 0
    let animationFrameId: number;
    //Our draw came here
    const render = () => {
      frameCount++
      if (context){
        draw(context, frameCount)
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
      },
      onMove: event => {
        console.log("detltaY", event.deltaY);
        alert('You swiped!')
      }
    });
    gesture.enable(true);
  });
  
 
  return <canvas 
    id='main-game'
    width={windowSize.width} height={windowSize.height * 0.8}
    ref={canvasRef} 
    {...props}
  />
 
}

export default Canvas