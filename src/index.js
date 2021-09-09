import "./styles.css";

const container = document.querySelector(".container");
const url = "https://teclead.de/recruiting/radios";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.radios.forEach((radio) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class='radio-line'>
      <div class='name-radio'>
       ${radio.name}     
      </div>
      <div class='FM-station'>
      ${radio.frequency}
      </div>
      </div>
      <div class="drop-down hidden">
      <i class="fas fa-minus-circle"></i>
      <div class="image" style='background-image: url(${radio.image})'></div>
      <i class="fas fa-plus-circle"></i>
      </div>`
      );
    });
    const radioLine = document.querySelectorAll(".radio-line");
    const radioArray = Array.from(radioLine);
    const dropDown = document.querySelector(".drop-down");
    radioArray.map((button) => {
      button.addEventListener("click", (event) => {
        
        dropDown.classList.toggle("hidden");
      });
    });
  });

//document.getElementById("app").innerHTML = `
//<h1>Hello Vanilla!</h1>
//<div>
//We use the same configuration as Parcel to bundle this sandbox, you can find more
//info about Parcel
//<a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//</div>
//`;
