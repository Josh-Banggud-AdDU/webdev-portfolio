document.addEventListener('DOMContentLoaded', function(){
    const hoverObject = document.getElementById('hoverObject');

    hoverObject.addEventListener('mousemove', (e) => {
        const hoverObjectRect = hoverObject.getBoundingClientRect();
        const hoverObjectCenterX = hoverObjectRect.width / 2;
        const hoverObjectCenterY = hoverObjectRect.height / 2;

        const mouseX = e.clientX - hoverObjectRect.left;
        const mouseY = e.clientY - hoverObjectRect.top;

        const offsetX = mouseX - hoverObjectCenterX;
        const offsetY = mouseY - hoverObjectCenterY;

        const rotateX = (mouseY / hoverObjectRect.height - 0.5) * 30;
        const rotateY = (mouseX / hoverObjectRect.width - 0.5) * -30;

        hoverObject.style.transform = `scale(110%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        const shadowOffsetX = -offsetX * 0.15;
        const shadowOffsetY = -offsetY * 0.15;
        console.log(shadowOffsetX, shadowOffsetY)
        hoverObject.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px 100px rgba(127, 39, 255, 0.3)`;
    });

    hoverObject.addEventListener('mouseleave', () => {
        hoverObject.style.transform = `scale(100%) rotateX(0deg) rotateY(0deg)`;
        hoverObject.style.boxShadow = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const project = document.getElementById('p-01');
    const tDiv = document.getElementById('p-titleContainer');
    const textDiv = project.firstElementChild;
    const pTag = textDiv.querySelector('p');

    project.addEventListener('mouseover', () => {
        setTimeout(function(){
            pTag.classList.remove("opacity-0");
            pTag.classList.add("opacity-100");
            tDiv.classList.remove("translate-y-1/2");
        }, 10);
    });

    project.addEventListener('mouseleave', () =>{
        pTag.classList.remove("opacity-100");
        pTag.classList.add("opacity-0");
        tDiv.classList.add("translate-y-1/2");
    });
});