let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let btns = [btn1, btn2, btn3]


function clickOnItem(button) {
	if (tg.MainButton.isVisible && item == button.id) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Перейти в корзину");
		item = button.id;
		console.log("Button ID:", item);
		tg.sendData(item);
		tg.MainButton.show();
	}
}

btns.forEach(btn => btn.addEventListener("click", function () { clickOnItem(this) }))


Telegram.WebApp.onEvent("mainButtonClicked", function () {
	
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

// ====================================================================



