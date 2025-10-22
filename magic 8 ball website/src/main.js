function changeState() {
    var num = Math.floor(Math.random() * 5);
    var img = document.getElementById('Img');

    // ✅ Get the input value at the moment the button is clicked
    const data = document.getElementById("questionInput");
    const inpput = data.value;

    // ✅ Display the input text
    displayDate(inpput);

    // ✅ Change image
    if (num === 0) {
        img.src = '../assets/1.png';
    } else if (num === 1) {
        img.src = '../assets/4.png';
    } else if (num === 2) {
        img.src = '../assets/3.png';
    } else if (num === 3) {
        img.src = '../assets/2.png';
    } else {
        img.src = '../assets/0.png';
    }

    // ✅ Clear the input field
    text_clear();
}


function text_clear() {
    document.getElementById('questionInput').value = '';

}
function displayDate(text) {
    document.getElementById("trying").innerHTML = text;
}