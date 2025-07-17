const upload = document.getElementById('upload');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resizeBtn = document.getElementById('resizeBtn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadLink = document.getElementById('download');
let img = new Image();

upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    img.onload = () => {
      widthInput.value = img.width;
      heightInput.value = img.height;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

resizeBtn.addEventListener('click', () => {
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  downloadLink.href = canvas.toDataURL();
});
