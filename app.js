
function calculator(callback) {
    let a = 10;
    let b = 10;
    let sum = a + b;
    callback(sum);
}

calculator((some) => {
    document.getElementById('p1').innerHTML = some;
});

function myFunction() {
    let x = document.getElementById('h1');
      x.innerHTML = 'Hello git';
}