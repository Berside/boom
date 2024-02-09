let boom = document.querySelector('.cost')
let n = 1;
let a = 0;
let b = 0;
tak = 0;
function increment() {
    boom.innerHTML = parseFloat(boom.innerHTML) + n
}
function buff() {
    if ( parseFloat(boom.innerHTML) >= 100) {
        boom.innerHTML = parseFloat(boom.innerHTML) - 100
        n = 5
        const element = document.getElementById("1");
        element.remove();
        const bab = document.getElementById("2");
        bab.remove();
    }
}
function buffTwo() {
    a = a + 1;
    if (parseFloat(boom.innerHTML) >= 300) {
        if ( a  > 5) {
            const element = document.getElementById("11");
            element.remove();
            const bab = document.getElementById("12");
            bab.remove();
        } else {
            boom.innerHTML = parseFloat(boom.innerHTML) - 300
            let intervalId = setInterval(() => {
                boom.innerHTML = parseFloat(boom.innerHTML) +  12;
            },  500);
            
            setTimeout(() => {
                clearInterval(intervalId); // Остановить интервал после  30 секунд
            },  30000);
    }
}
}
function buffFree() {
    if ( parseFloat(boom.innerHTML) >= 1000) {
        boom.innerHTML = parseFloat(boom.innerHTML) - 1000
        n = 10
        const element = document.getElementById("3");
        element.remove();
        const bab = document.getElementById("4");
        bab.remove();
    }
}
function buffFour() {
    b = b+ 1;
    if (parseFloat(boom.innerHTML) >= 1250) {
        if ( b  > 5) {
            const element = document.getElementById("13");
            element.remove();
            const bab = document.getElementById("14");
            bab.remove();
        } else {
            boom.innerHTML = parseFloat(boom.innerHTML) - 1250
            let intervalId = setInterval(() => {
                boom.innerHTML = parseFloat(boom.innerHTML) +  50;
            },  500);
            
            setTimeout(() => {
                clearInterval(intervalId); // Остановить интервал после  30 секунд
            },  30000);
            }
    }
}
function buffFive() {
    if ( parseFloat(boom.innerHTML) >= 10000) {
        boom.innerHTML = parseFloat(boom.innerHTML) - 10000
        n = 50
        const element = document.getElementById("5");
        element.remove();
        const bab = document.getElementById("6");
        bab.remove();
    }
}
function buffSix() {
    if (parseFloat(boom.innerHTML) >= 5000) {
        tak +=1
        if ( tak  > 7) {
            const element = document.getElementById("kak");
            element.remove();
            const bab = document.getElementById("tak");
            bab.remove();
        } else {
        boom.innerHTML = parseFloat(boom.innerHTML) - 5000
        boom.innerHTML = parseFloat(boom.innerHTML) * Math.floor(Math.random() * (4 - 1 +  1)) + 1;
        }
    }
}