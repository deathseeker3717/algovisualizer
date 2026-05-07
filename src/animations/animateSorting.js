export function animateSorting(animations,speed){
    const bars = document.getElementsByClassName("bar")

    animations.forEach((animation,i) => {
        const [a,b] = animation.indices
        setTimeout(()=>{
            if (animation.type === "compare") {
            bars[a].style.backgroundColor = "red";
            bars[b].style.backgroundColor = "red";
            setTimeout(() => {
            bars[a].style.backgroundColor = "teal";
            bars[b].style.backgroundColor = "teal";
            }, speed);
            }
            if (animation.type === "swap"){
                const tempHeight = bars[a].style.height
                bars[a].style.height = bars[b].style.height
                bars[b].style.height = tempHeight
            }
            if (i === animations.length - 1) {
                for (let k=0;k<bars.length;k++) {
                    setTimeout(() => {
                    bars[k].style.backgroundColor = "green";
                    },k*20)
                }
            }
        },i*speed)
    });
}