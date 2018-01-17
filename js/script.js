var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите произвольное имя');  //заполняем пустой массив 5 произвольными именами
}

var userName = prompt('Введите имя пользователя');
var flag = false;

for (var i = 0; i < arr.length; i++) {
	if (userName === arr[i] && arr[i] != "") {  //сравниваем имя пользователя с массивом произвольных имен
		flag = true;
		break;
	} else {
		flag = false;
	}
}


if (flag) {
	alert('Привет, ' + userName + ', авторизация прошла успешно');
} else {
		alert('Вашего имени нет в списке имен');
}


