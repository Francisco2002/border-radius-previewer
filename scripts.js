const borderTLeft = document.getElementById("border-top-left");
const borderTRight = document.getElementById("border-top-right");
const borderBLeft = document.getElementById("border-bottom-left");
const borderBRight = document.getElementById("border-bottom-right");

const target = document.getElementById("target");

const btnCopy = document.getElementById("btn-copy");
const result = document.getElementById("result");

window.addEventListener("load", () => {
    updateResult();
})

borderTLeft.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderTopLeftRadius = value + "px";
        updateResult();
    }
})

borderTRight.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderTopRightRadius = value + "px";
        updateResult();
    }
})

borderBLeft.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderBottomLeftRadius = value + "px";
        updateResult();
    }
})

borderBRight.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderBottomRightRadius = value + "px";
        updateResult();
    }
})

function updateResult() {
    result.innerHTML = "border-top-left-radius: " + borderTLeft.value +"px;<br/>";
    result.innerHTML += "border-top-right-radius: " + borderTRight.value + "px;<br/>";
    result.innerHTML += "border-bottom-left-radius: " + borderBLeft.value + "px;<br/>";
    result.innerHTML += "border-bottom-right-radius: " + borderBRight.value + "px;<br/>";
}

btnCopy.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = result.innerText;

    document.body.appendChild(textArea);

    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
        window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
    }

    document.body.removeChild(textArea);
})