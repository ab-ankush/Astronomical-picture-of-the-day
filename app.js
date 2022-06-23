const imageTag = document.querySelector("#main-img");
const imageView = document.querySelector(".image-view");
const explanationTag = document.querySelector("#exp");
const input = document.querySelector("#Input");
const btn = document.querySelector("button");

//   * Creating elements to append
const newImg = document.createElement("img");
const title = document.createElement("p");
const date = document.createElement("p");
//   const explanation = document.createElement("p");

function appendImage(image) {
  //   console.log(image);

  //   * Setting attribute of image to get its source
  newImg.setAttribute("src", image.url);
  imageTag.setAttribute("href", image.hdurl);
  imageTag.setAttribute("target", "_blank");

  //   * Appending image date and title
  date.innerText = image.date;
  title.innerText = image.title;
  // explanation.innerText = image.explanation;

  //   * Appending date, image and title to the dom
  imageTag.append(newImg);
  imageView.append(title);
  imageView.insertBefore(date, imageTag);
  explanationTag.append(image.explanation);
}

const getImage = async (date) => {
  const get = await fetch(
    date == undefined
      ? `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      : `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
  );
  const image = await get.json();

  appendImage(image);
};

btn.addEventListener("click", () => {
  if (input.value === "") {
    console.log("empty Value");
  } else {
    getImage(input.value);
    input.value = "";
  }
});

getImage();
