import React, { useRef, useEffect } from 'react'

const Canvas : React.FC = props => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let x = 20
  let xspeed = 10
  let yspeed = 10
  let y = 20
  const r = 20
  const s = 0
  const end = 2*Math.PI
  const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(x, y,  r, s, end)
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
  
  return <canvas style={{width:"100%",maxHeight:"600px", minHeight: "400px"}} ref={canvasRef} {...props}/>
}

export default Canvas