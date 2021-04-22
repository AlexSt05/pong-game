/*
* This file defines our draw function
*/
export const draw = (
    ctx:CanvasRenderingContext2D, 
    frameCount:number, 
    canvasData: any
) => {
    ctx.fillStyle = '#1DF9CD'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.ellipse(canvasData.x, canvasData.y, canvasData.r, canvasData.r, 0, canvasData.s, canvasData.end)
    ctx.fill()
    canvasData.x+=canvasData.xspeed
    canvasData.y+=canvasData.yspeed
    
    if (canvasData.x + canvasData.r >ctx.canvas.width){
        canvasData.xspeed*=-1
    }
    if (canvasData.x - canvasData.r <0){
        canvasData.xspeed*=-1
    }
    if (canvasData.y + canvasData.r >ctx.canvas.height){
        canvasData.yspeed*=-1
    }
    if (canvasData.y - canvasData.r <0){
        canvasData.yspeed*=-1
    }
};

export const onSwipeUp = (canvasData: any) => {
    canvasData.yspeed=-12;
    
    
};