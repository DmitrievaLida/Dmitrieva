let Un=false;//качество имени пользователя
let Pw=false;//качество пароля
let Ph=false;//качество телефонного номера
let Em=false;//качество электронной почты

//Функция проверки имени пользователя
function checkUserName() {
    var Uname = document.getElementById("UserName").value;
    var regex = /^[a-zA-Zа-яА-Я\s]{2,15}$/;

    if (regex.test(Uname)) {// if testing of Uname is true
        document.getElementById("Name_Check").style.color = "green";
        document.getElementById("Name_Check").innerHTML = "Имя правильное!";
        Un=true;
        return true;
    }
    else {// if it's not
        document.getElementById("Name_Check").style.color = "red";
        document.getElementById("Name_Check").innerHTML = "Имя пользователя: от 2 до 15 букв";
        Un=false;
        return false;
    }
}

//Функция проверки пароля
function checkPswr() {
    var Pwr = document.getElementById("Pswr").value;
    var regex = /^[a-zA-Z0-9\s]{5,15}$/;

    if (regex.test(Pwr)) { // if testing of Pwr is true
        document.getElementById("Pswr_Check").style.color = "green";
        document.getElementById("Pswr_Check").innerHTML = "Пароль хороший!";
        Pw=true;
        return true;
    }
    else {// if it's not
        document.getElementById("Pswr_Check").style.color = "red";
        document.getElementById("Pswr_Check").innerHTML = "Английские буквы или цифры от 5 до 15 знаков";
        Pw=false;
        return false;
    }
}

//Функция проверки телефонного номера
function checkPhone() {
    var phone = document.getElementById("Phone").value;
    var regex = /^\d{3}-(\d{3})-\d{4}$/;

    if (regex.test(phone)) { // if testing of phone is true
        document.getElementById("Phone_Check").style.color = "green";
        document.getElementById("Phone_Check").innerHTML = "Номер корректен!";
        Ph=true;
        return true;
    }
    else {// if it's not
        document.getElementById("Phone_Check").style.color = "red";
        document.getElementById("Phone_Check").innerHTML = "Введите номер в формате ххх-ххх-хххх";
        Ph=false;
        return false;
    }
}

//Функция проверки адреса электронной почты
function checkEMail() {
    var Eml = document.getElementById("EMail").value;
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    if (regex.test(Eml)) {// if testing of Eml is true
        document.getElementById("EMail_Check").style.color = "green";
        document.getElementById("EMail_Check").innerHTML = "EMail правильный!";
        Em=true;
        return true;
    }
    else {// if it's not
        document.getElementById("EMail_Check").style.color = "red";
        document.getElementById("EMail_Check").innerHTML = "EMail - неправильный";
        Em=false;
        return false;
    }
}

//Итоговая проверка полноты введённых данных 
function outputData() {
    if (Un&&Pw&&Ph&&Em){
        var Uname = document.getElementById("UserName").value;
        var Pwr = document.getElementById("Pswr").value;
        var phone = document.getElementById("Phone").value;
        var Eml = document.getElementById("EMail").value;
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте " + Uname + "!";
        document.getElementById("summary").innerHTML += "<p>Спасибо, что оставили свои данные. Они будут обработаны в ближайшее время. Проверьте их ещё раз: </p>";
        document.getElementById("summary").innerHTML += "<p>Ваш пароль: " + Pwr;
        document.getElementById("summary").innerHTML += "<p>Ваш номер телефона: " + phone;
        document.getElementById("summary").innerHTML += "<p>Ваш EMail: " + Eml;
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Спасибо, что воспользовались нашим сайтом!</p>";
    }
    else{
         document.getElementById("summary").style.color="red";
         document.getElementById("summary").innerHTML = "Минимум одно из полей заполнено некорректно...";
    }
}

//Функция изменения цвета первой надписи
function ChColor() {
    var Str11 = document.getElementById("Str1");
    Str11.style.color = "red";
}

//Функция изменения цвета фона второй надписи
function ChBackgr() {
    var Str12 = document.getElementById("Str2");
    Str12.style.backgroundColor = "yellow";
}