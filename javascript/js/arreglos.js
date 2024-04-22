/*let carrito=[  "leche" ,1,
               "carne",2,
               "Papa",3,
               "Fideo",1];

console.log("Item: "+ carrito[0]);
console.log("Cantidad: ;"+ carrito[1]);
console.log("Item: "+ carrito[2]);
console.log("Cantidad: "+ carrito[3]);
console.log("Item: "+ carrito[4]);
console.log("Cantidad: "+ carrito[5]);
console.log("Item: "+ carrito[6]);
console.log("Cantidad: "+ carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);
/*
/*
let Item = {Nombre: "Leche", cantidad: 3, precio: 7.5};
console.log("Item: " + Item.Nombre); // Corregido a Item.Nombre en lugar de Item.nombre
console.log("Cantidad: " + Item.cantidad);
console.log("Precio: " + Item.precio + " Bs");
console.log("Total: " + Item.cantidad * Item.precio + " Bs");

let carrito = [
    {Nombre: 'Leche', cantidad: 1, precio: 7.5},
    {Nombre: 'Carne', cantidad: 2, precio: 10},
    {Nombre: 'Papa', cantidad: 3, precio: 4},
    {Nombre: 'Fideo', cantidad: 1, precio: 5}
];

Item = {Nombre: 'Arroz', cantidad: 3, precio: 5}; // 'name' cambiado a 'Nombre'
carrito.push(Item);
console.log (carrito);

 // Array normal
/*
Uso del array
 var arrayNormal = [3, 1, 5, 2, 4];

 // Ordenar array normal
 arrayNormal.sort(function(a, b) {
   return a - b;
 });

 console.log("Array normal ordenado:", arrayNormal);

 // Array con estructura
 var arrayConEstructura = [
   {nombre: "Juan", edad: 30},
   {nombre: "María", edad: 25},
   {nombre: "Pedro", edad: 35}
 ];

 // Ordenar array con estructura por edad
 arrayConEstructura.sort(function(a, b) {
    return a.edad - b.edad;
  });

  console.log("Array con estructura ordenado por edad:", arrayConEstructura);
  */
 
  let item ={nombre: 'Leche', cantidad: 2, precio: 7 };
  
  console.log("Item: "+ item.nombre)
  console.log("Cantidad:"+item.cantidad)
  console.log("Precio: " + item.precio + " Bs")
  console.log("Total: " + item.precio + item.cantidad*item.precio+" Bs")

  let carrito = [
    {Nombre: 'Leche', cantidad: 1, precio: 7.5},
    {Nombre: 'Carne', cantidad: 2, precio: 10},
    {Nombre: 'Papa', cantidad: 3, precio: 4},
    {Nombre: 'Fideo', cantidad: 1, precio: 5}
];

  item={Nombre:'Arroz', cantidad: 3, precio: 6};
  carrito.push(item);
  console.log(" IMPRESION REALIZADA POR PRECIO ");

  console.log(" IMPRESION REALIZADA POR NOMBRE ");
  carrito.sort((x,y)=> x.Nombre.localeCompare(y.Nombre));
  console.log(carrito);

  
  let carritoprecio=carrito.slice().sort ((a,b) => a.precio-b);
  console.log(carritoprecio);
