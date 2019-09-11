interface IUser {
    lastname:string,
    firstname:string,
    address?:string,   //il ? indica che la variabile è opzionale
    [propName: string] : any  //questo per dire che l'interface può prendere anche altri parametri aggiuntivi di qualsiasi tipo

}

function showUser ( user: IUser) {
    console.log(user.firstname + ' , ' + user.lastname + ' , ' + user.age);
}

showUser({lastname: 'Arias', firstname: 'Hidran', age:45});