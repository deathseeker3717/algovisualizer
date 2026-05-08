export function animateSorting(animations,speed){
    const bars = document.getElementsByClassName("bar")

    animations.forEach((animation,i) => {
        const [a,b] = animation.indices
        setTimeout(()=>{
            if (animation.type === "compare") {
                if (bars[a]) bars[a].style.backgroundColor = "red";
                if (bars[b]) bars[b].style.backgroundColor = "red";
                setTimeout(() => {
                    if (bars[a]) bars[a].style.backgroundColor = "teal";
                    if (bars[b]) bars[b].style.backgroundColor = "teal";
                }, speed);
            }
            if (animation.type === "swap"){
                if (bars[a] && bars[b]) {
                    const tempHeight = bars[a].style.height
                    bars[a].style.height = bars[b].style.height
                    bars[b].style.height = tempHeight
                }
            }
            if (animation.type === "overwrite") {
                if (bars[a]) {
                    bars[a].style.height = `${b}px`;
                    bars[a].style.backgroundColor = "lightgreen";
                    setTimeout(() => {
                        if (bars[a]) bars[a].style.backgroundColor = "teal";
                    }, speed * 2);
                }
            }
            if (i === animations.length - 1) {
                for (let k=0;k<bars.length;k++) {
                    setTimeout(() => {
                        if (bars[k]) bars[k].style.backgroundColor = "#10B981";
                    },k*20)
                }
            }
        },i*speed)
    });
}