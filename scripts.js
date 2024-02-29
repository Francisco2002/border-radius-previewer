const borderTLeft = document.getElementById("border-top-left");
const borderTLeftUnit = document.getElementById("border-top-left-unit");

const borderTRight = document.getElementById("border-top-right");
const borderTRightUnit = document.getElementById("border-top-right-unit");

const borderBLeft = document.getElementById("border-bottom-left");
const borderBLeftUnit = document.getElementById("border-bottom-left-unit");

const borderBRight = document.getElementById("border-bottom-right");
const borderBRightUnit = document.getElementById("border-bottom-right-unit");

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
        target.style.borderTopLeftRadius = value + borderTLeftUnit.value;
        updateResult();
    }
})

borderTLeftUnit.addEventListener("change", e => {
    e.preventDefault();

    const value = borderTLeft.value;

    if(value) {
        target.style.borderTopLeftRadius = value + e.target.value;
        updateResult();
    }

    updateResult();
})

borderTRight.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderTopRightRadius = value + borderTRightUnit.value;
        updateResult();
    }
})

borderTRightUnit.addEventListener("change", e => {
    e.preventDefault();

    const value = borderTRight.value;

    if(value) {
        target.style.borderTopRightRadius = value + e.target.value;
        updateResult();
    }

    updateResult();
})

borderBLeft.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderBottomLeftRadius = value + borderBLeftUnit.value;
        updateResult();
    }
})

borderBLeftUnit.addEventListener("input", e => {
    e.preventDefault();
    const value = borderBLeft.value;

    if(value) {
        target.style.borderBottomLeftRadius = value + e.target.value;
        updateResult();
    }
})

borderBRight.addEventListener("input", e => {
    e.preventDefault();
    const value = e.target.value;

    if(value) {
        target.style.borderBottomRightRadius = value + borderBRightUnit.value;
        updateResult();
    }
})

borderBRightUnit.addEventListener("input", e => {
    e.preventDefault();
    const value = borderBRight.value;

    if(value) {
        target.style.borderBottomRightRadius = value + e.target.value;
        updateResult();
    }
})

function updateResult() {
    result.innerHTML = "border-top-left-radius: " + borderTLeft.value + borderTLeftUnit.value + ";<br/>";
    result.innerHTML += "border-top-right-radius: " + borderTRight.value + borderTRightUnit.value + ";<br/>";
    result.innerHTML += "border-bottom-left-radius: " + borderBLeft.value + borderBLeftUnit.value + ";<br/>";
    result.innerHTML += "border-bottom-right-radius: " + borderBRight.value + borderBRightUnit.value + ";<br/>";
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