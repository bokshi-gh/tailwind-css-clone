let textarea = document.getElementsByTagName("textarea")[0];
let runButton = document.getElementsByTagName("button")[0];
let outputWrapper = document.getElementById("output-wrapper");

runButton.addEventListener("click", () => {
    outputWrapper.innerHTML = textarea.value;
    console.log(textarea.value);
})