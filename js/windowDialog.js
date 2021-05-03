let dialog = (userNumber, text) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `${userNumber}: __ ${text}`;
    ul.appendChild(li)
}