function changeImage(img) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = img.src.replace("100/60", "500/300");
}
