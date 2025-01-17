const track = document.getElementById("image-track");
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}
window.onmousemove = e => {
    if (track === null) return;
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100; 

    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    if (nextPercentage > 0) return; // to prevent unlimited left slide

    if (nextPercentage < -100) return; // to prevent unlimited right slide

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        // image.style.objectPosition = `${nextPercentage + 100} 50%`;
        image.animate({
            objectPosition: `${nextPercentage + 100}% 50%`
        }, {
            duration: 1200, fill: "forwards"
        })
    }
}