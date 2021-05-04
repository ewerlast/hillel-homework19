let body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.className = "wrapper";
body.appendChild(wrapper);
let dialogWindow = document.createElement('ul');
wrapper.appendChild(dialogWindow);

wrapper.appendChild(input());

function cliare() {
    let erea = document.querySelector('textarea');
    erea.value = " ";
}






arrBot = ["привет", "как дела ?", "я отвечаю не в попад", "я твой первый тупой бот))"];

// ********************************************************************
function randomInteger(min, max) {

    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
// ***************************************************************

async function user() {
    let erea = document.querySelector('textarea');
    let ereaValue = erea.value;
    await dialog("user1", ereaValue);

}


async function bott() {
    arr = ["привет", "как дела ?", "я отвечаю не в попад", "я твой первый тупой бот))"];
    if (user) {

        let erea = document.querySelector('textarea');
        let ereaValue = erea.value;

        await setTimeout(function() {
            if (ereaValue.search("пока") == true) {
                alert("До новых встречь");
                let button = document.querySelector('button');
                button.disabled = "true";
                button.style.opacity = "0.5"
                button.innerHTML = "Чат отключен";

                return;
            } else {
                for (let i = 0; i < arr.length; i++) {
                    dialog("bott", arr[randomInteger(0, arrBot.length - 1)]);
                    return
                }
            }

        }, randomInteger(1 * 1000, 3 * 1000))
    }

}





// async function a() {
//     await bott();

// }
// async function b() {
//     await user()
// }






wrapper.appendChild(button("submit", "btn", "отправить"));
document.querySelector("button").addEventListener("click", bott);
document.querySelector('button').addEventListener("click", cliare);
document.querySelector("button").addEventListener("click", user);

document.querySelector('body').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        bott();
    }
})
document.querySelector('body').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        user();
    }
})
document.querySelector('body').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        cliare();
    }
})