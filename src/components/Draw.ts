const LEVEL1_MAX = 50;
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
    const progress = canvasData.numSwipes/LEVEL1_MAX;
    drawProgressBar(ctx, canvasData, canvasData.numSwipes/LEVEL1_MAX);
    if(progress > 1){
        history.push("/level/1")
    }


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

const drawProgressBar = (ctx:CanvasRenderingContext2D, 
    canvasData: any, percentage: number) => {
    ctx.fillStyle = '#000000'
    ctx.fillRect(10, 10, 150, 10)
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(10, 10, 150*percentage, 10)
};

const nearBall = (canvasData: any, swipeEvent: any): boolean => {
    const fingerX = swipeEvent.startX;
    const fingerY = swipeEvent.startY;
    const ballX = canvasData.x;
    const ballY = canvasData.y;
    const nearBall = (Math.abs(fingerX - ballX) < 150 
    && Math.abs(fingerY - ballY) < 150);
    
    console.log(nearBall);
    return nearBall;
}

const ballMovesTooFast = (canvasData: any) => {
    return canvasData.yspeed > 25;
}

export const onSwipeUp = (canvasData: any, swipeEvent: any) => {
    if (nearBall(canvasData, swipeEvent)) {
        const change = 20 * swipeEvent.velocityY;
        console.log("test: " + change);
        canvasData.yspeed= change;
        canvasData.numSwipes += 1;
    }

    if (ballMovesTooFast(canvasData)) {
        canvasData.yspeed = 10;
    }
};