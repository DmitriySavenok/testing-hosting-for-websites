const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const canvas_width = 500;
const canvas_height = 500;

const photo_input = document.getElementById("photo_input");
const input = document.querySelector('#font_size_input');
const text = document.getElementById('text_input');
document.getElementById('photo_input').value = '';

let title = 'Введите текст';
let title_bgr = ['../src/text_background.jpg', 500, 115];
let font_size = 32;
const font_color = '#E8E8D9';

input.value = font_size;
text.value = '';

let photo = ['../src/photo_empty_bg.jpg'];

function drawCanvas() {
    canvas.width = canvas_width;
    canvas.height = canvas_height;

    // Загрузка фото
    let photo_empty_bg = new Image();
    photo_empty_bg.onload = function () {
        context.drawImage(photo_empty_bg, 0, 0, 500, 385);
    };
    photo_empty_bg.src = photo[0];

    // Загрузка фото с устройства
    photo_input.onchange = function (e) {
        var URL = window.webkitURL || window.URL;
        photo[0] = URL.createObjectURL(e.target.files[0]);
        var img = new Image();
        img.onload = function () {
            context.drawImage(img, 0, 0, 500, 385);
        }
        img.src = photo[0];
    }

    // Плашка под заголовок
    let titleBackground = new Image();
    titleBackground.onload = function () {
        context.drawImage(titleBackground, 0, 385, title_bgr[1], title_bgr[2]);
        context.font = font_size + "px sans-serif";
        context.fillStyle = font_color;
        context.fillText(title, 165, canvas_height - 50);
    };
    titleBackground.src = title_bgr[0];
}

drawCanvas();

function setCanvasSize() {

}

function setFontSize() {
    input.addEventListener("input",
        function () {
            font_size = input.value;
            drawCanvas();
        });
}

setFontSize();

function addTitle() {
    title = text.value;
    drawCanvas();
    requestAnimationFrame(drawCanvas)
}

function saveCanvas() {
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    document.body.appendChild(link); // Firefox requires the link to be in the body :(
    link.href = dataURL;
    link.download = "my-image-name.jpg";
    link.click();
    document.body.removeChild(link);
}
