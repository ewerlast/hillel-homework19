let button = (type, classButton, text) => {
    let button = document.createElement('button');
    button.className = classButton;
    button.type = type;
    button.innerHTML = `${text}`;
    return button;
}