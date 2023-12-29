function loadImage() {
    const imageUrl = document.getElementById("imageUrl").value;
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        const lines = img.height;
        let currentLine = 0;

        const interval = setInterval(() => {
            ctx.drawImage(img, 0, currentLine, img.width, 1, 0, currentLine, img.width, 1);
            currentLine++;

            if (currentLine >= lines) {
                clearInterval(interval);
            }
        }, 50); // Adjust the interval time (in ms) to control the speed
    };
}
