/// <reference types="../@types/jquery" />

//-----------lodding-------------------------------
$(function () {

    search('s', ' ').then(() => {
        $(".inner-loading-screen").fadeOut(300)
        $('#lodding').fadeOut(1700, function () {
            $('#lodding').slideUp(1700, function () {
                $('body').css('overflow', 'auto');
                $('#lodding').remove();
            })
        })
    })
})
//-------------------------------------------------------
//------------navbar close-------------------
function close() {
    let widthNavber = $('#nav .navbar_hide_show').outerWidth();
    $('#nav').animate({ left: -widthNavber }, 700)
    $('#nav .open_nav .icon_open_close .open_close').addClass('fa-bars');
    $('#nav .open_nav .icon_open_close .open_close').removeClass('fa-xmark');
    $("#nav .navbar .links a").css('top', '500px');
}
//-------------navbar open--------------------------
function open() {
    $('#nav').animate({ left: 0 }, 700)
    $('#nav .open_nav .icon_open_close .open_close').removeClass('fa-bars');
    $('#nav .open_nav .icon_open_close .open_close').addClass('fa-xmark');

    for (let i = 0; i < 5; i++) {
        $("#nav .navbar .links a").eq(i).animate({
            top: 0
        }, (i + 5) * 100);
    }
}
//-------------call close -----------------------
close();

//---------------toggle nav open and close -------------------
$('#nav .open_nav .icon_open_close .open_close').on('click', function () {

    if ($('#nav').css("left") == '0px') {
        close();
    }
    else {
        open();
    }

})

// -------------------------------------------------

function InputSearchName(value) {
    var NameInput = value;
    search('s', NameInput);
}

function InputSearchFirstName(value) {
    var firstLetter = value;
    if (firstLetter === '') {
        firstLetter = 'a';
    }

    if (firstLetter.length >= 1) {
        search('f', firstLetter);
    }
}

var DataByName = [];


async function search(type, value) {
    DataByName = [];
    $(".inner-loading-screen").fadeIn(300)

    var http = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${value}`);
    var response = await http.json();

    if (response && response.meals) {
        DataByName = response.meals;
    } else {
        DataByName = [];
        console.error('Invalid or empty JSON response');
    }

    if (type == 's' && value == ' ') {
        displayDataSearch();
    $(".inner-loading-screen").fadeOut(300)


    } else {
        displaySearch();
    $(".inner-loading-screen").fadeOut(300)

    }
}
//------------------------------all display ------------
function displayDataSearch() {
    var cols = '';
    for (var i = 0; i < DataByName.length; i++) {
        cols += `
            <div class="col-lg-3 col-md-6 col-12 h-100 rounded section-meal" style="cursor: pointer;" onclick='Detail(${DataByName[i].idMeal})'>
                <div class="position-relative overflow-hidden rounded">
                    <img src="${DataByName[i].strMealThumb}" class="rounded w-100 h-100" alt="meal" />
                    <div class="layer rounded d-flex justify-content-center align-items-start">
                        <h2>${DataByName[i].strMeal}</h2>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('mainItem').innerHTML = cols;
}


//-------------------display in search-------------------
function displaySearch() {
    var cols = '';
    for (var i = 0; i < DataByName.length; i++) {
        cols += `
            <div class="col-lg-3 col-md-6 col-12 h-100 rounded section-meal" style="cursor: pointer;" onclick='Detail(${DataByName[i].idMeal})'>
                <div class="position-relative overflow-hidden rounded">
                    <img src="${DataByName[i].strMealThumb}" class="rounded w-100 h-100" alt="meal" />
                    <div class="layer rounded d-flex justify-content-center align-items-start">
                        <h2>${DataByName[i].strMeal}</h2>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('SearchName').innerHTML = cols;
}
// ----------- function search -------------------
function searchContact() {
    var cols = `
        <div id="search">
            <div class="container">
                <div class="row gy-3 py-5">
                    <div class="col-md-6 col-12">
                        <input
                            type="text"
                            placeholder="Search By Name"
                            id="InputSearchName"
                            oninput="InputSearchName(this.value)"
                            class="rounded text-white w-100 bg-transparent"
                        />
                    </div>
                    <div class="col-md-6 col-12">
                        <input
                            type="text"
                            id="InputSearchFirstName"
                            oninput="InputSearchFirstName(this.value)"
                            maxlength="1"
                            placeholder="Search By First Latter"
                            class="rounded text-white w-100 bg-transparent"
                        />
                    </div>
                </div>
                <div class="row meal gy-4 py-5" id="SearchName">
                    <!-- Display search results here -->
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainItem').innerHTML = cols;
}
///-----------------------------------------------------------------------





// -----------------------------contact-------------------------
let submitBtn ;


function contact() {
    var cols = `<div id="contact" class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="w-100 rounded" placeholder="Enter Your Name">
                <p id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </p>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="w-100 rounded" placeholder="Enter Your Email">
                <p id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </p>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="w-100 rounded" placeholder="Enter Your Phone">
                <p id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </p>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="w-100 rounded" placeholder="Enter Your Age">
                <p id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </p>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="w-100 rounded" placeholder="Enter Your Password">
                <p id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </p>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="w-100 rounded" placeholder="Repassword">
                <p id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </p>
            </div>
        </div>
        <button id="submitBtn" onclick=submit() disabled class="btn btn-outline-danger px-2 mt-5">Submit</button>
    </div>
</div> `
document.getElementById('mainItem').innerHTML = cols;
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")

    } else {
        submitBtn.setAttribute("disabled", true)
    }
}
function submit(){
    document.getElementById("nameInput").value =""
    document.getElementById("emailInput").value =""
    document.getElementById("phoneInput").value =""
    document.getElementById("ageInput").value =""
    document.getElementById("passwordInput").value =""
    document.getElementById("repasswordInput").value =""
}
function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^[1-9][0-9]$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}









