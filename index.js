const passwordBox = document.getElementById("password");
const copyButton = document.getElementById("copyBtn");

const length = 8;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "@#$%^&*()_+/><";
const allchars = uppercase + lowercase + num + symbol;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}


copyButton.addEventListener("click", copyPassword);
