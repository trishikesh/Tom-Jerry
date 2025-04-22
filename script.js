let currentCollage = 0;

function nextCollage() {
  const collages = document.querySelectorAll('.collage');
  if (currentCollage < collages.length - 1) {
    currentCollage++;
  } else {
    currentCollage = 0;
  }
  document.getElementById("collages").style.transform = `translateX(-${currentCollage * 100}%)`;
}

function prevCollage() {
  const collages = document.querySelectorAll('.collage');
  if (currentCollage > 0) {
    currentCollage--;
  } else {
    currentCollage = collages.length - 1;
  }
  document.getElementById("collages").style.transform = `translateX(-${currentCollage * 100}%)`;
}

function popupImage(img) {
  if (!img.classList.contains("flipped")) {
    img.classList.add("flipped");
    img.src = "images/back.png"; // change to flipped text image or do overlay
  } else {
    img.classList.remove("flipped");
    img.src = img.dataset.original; // restore original
  }
}
