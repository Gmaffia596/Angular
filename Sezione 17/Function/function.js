//arrow function
var myarrowfunc = function (e) { console.log(e); }; //se ho una sola istruzione da passare posso omettere le {}
myarrowfunc('Hidran');
//per indicare che il valore di ritorno sia definito
var myarrowfunc2 = function (e) { return e * 2; };
console.log(myarrowfunc2(2));
function func(x, y) { console.log('I am func'); }
var myfunc2; // vuol dire che a questa variabile posso assegnare una funzione che abbia li stessi parametri, rispettandone il tipo delle variabili
myfunc2 = func; //posso farlo perchè hanno lo stesso tipo di parametri
myfunc2('ts', 4);
//posso anche creare delle funzioni al volo che rispettino sempre il tipo dei parametri
myfunc2 = function (name, age) {
    console.log(name + ' is ' + age);
};
myfunc2('Hidran', 20);
