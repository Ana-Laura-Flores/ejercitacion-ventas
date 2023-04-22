const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    {
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["HDD Toyiva", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["HDD Toyiva", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 3, 5),
      nombreVendedora: "Ada",
      componentes: ["HDD Toyiva", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 3, 1),
      nombreVendedora: "Grace",
      componentes: ["HDD Toyiva", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 3, 14),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Centro",
    },
  ],

  precios: [
    {
      componente: "Monitor GPRS 3000",
      precio: 200,
    },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 },
  ],
};

//precioMaquina
//Crear una funcion precioMaquina(componentes) que recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

const precioComponente = (unComponente) => {
  for (const articulo of local.precios) {
    //console.log(articulo)
    if (unComponente === articulo.componente) {
      return articulo.precio;
    }
  }
};
console.log(precioComponente("RAM Quinston Fury"));

const precioMaquina = (componentes) => {
  let sumaTotal = 0;
  for (const componente of componentes) {
    sumaTotal += precioComponente(componente);
  }
  return sumaTotal;
};

console.log(precioMaquina(["Motherboard ASUS 1200", "HDD Toyiva"]));

//cantidadVentasComponente
//Crear una funcion cantidadVentasComponente(componente) que recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.

// const cantidadVentasComponente = (componente) => {

//     let cantidadVentas = 0
//      for (const articulo of local.ventas) {
//         for (const unArticulo of articulo.componentes){
//             if(componente === unArticulo){
//                 cantidadVentas += 1
//             }
//         }
//     }
//     return cantidadVentas
// }

//console.log(cantidadVentasComponente("Motherboard ASUS 1200"))
//console.log(cantidadVentasComponente("Monitor GPRS 3000"))

//vendedoraDelMes
//Crear una funcion vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// const giveMonth = (Date) => local.ventas.fecha.getMonth()

// console.log(giveMonth(new Date(2019, 1, 4)))

const vendedoraDelMes = (mes, anio) => {
  const ventasTotales = local.ventas;
  for (let i = 1; i < ventasTotales.length; i++) {
    if (
      ventasTotales[i].fecha.getMonth() === mes &&
      ventasTotales[i].fecha.getFullYear() === anio
    ) {
      if (
        precioMaquina(ventasTotales[0].componentes) >
        precioMaquina(ventasTotales[i].componentes)
      ) {
        return ventasTotales[i].nombreVendedora;
      }
    }
  }
  return "Este mes y año no hubo ventas";
};

console.log(vendedoraDelMes(0, 2019));
console.log(vendedoraDelMes(3, 2022));

// const vendedoraDelMes = (mes, anio) => {
//   //const ventas = local.ventas
//   for (const venta of local.ventas){
//     if (venta.fecha.getMonth() === mes && (venta.fecha.getFullYear() === anio)){
//       const preciosVentas = precioMaquina(venta.componentes)
//        console.log(preciosVentas)

//      }
//   }
// }

/*
const vendedoraDelMes = (mes, anio) => {
  const arrayVentas = local.ventas
  for (const venta of arrayVentas){
    if (venta.fecha.getMonth() === mes && (venta.fecha.getFullYear() === anio)){
      const preciosVentas = precioMaquina(venta.componentes).filter(precio =>{
        if (precio > precio){
          true
        }
      })
      console.log(preciosVentas > preciosVentas)
       
      
     }
  }
  return arrayVentas.nombreVendedora
}
console.log(vendedoraDelMes(1, 2019))
*/

/*

const vendedoraDelMes = (mes, anio) => {
  for (const venta of local.ventas){
    if (venta.fecha.getMonth() === mes){
      const precios = precioMaquina(venta.componentes)
      for ( const unPrecio of precios){
        if (unPrecio > unPrecio) {
          venta.nombreVendedora
          console.log(unPrecio)
        }
      }
     }
  }
}
console.log(vendedoraDelMes(3, 2019))

*/

/*
const vendedoraDelMes = (mes, anio) => {
  for (const venta of local.ventas){
    //console.log(venta.fecha)
    if (venta.fecha.getMonth() === mes && venta.fecha.getFullYear === anio){
     let mayor = Math.max(precioMaquina)
     console.log(mayor)
    }
  }

}
(vendedoraDelMes(1, 2019))
*/
//ventasMes
//Crear una funcion ventasMes(mes, anio) debe obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
let sumaVentas = 0;
const ventasMes = (mes, anio) => {
  const ventasTodas = local.ventas;
  for (let i = 0; i < ventasTodas.length; i++) {
    if (
      ventasTodas[i].fecha.getMonth() === mes &&
      ventasTodas[i].fecha.getFullYear() === anio
    ) {
      sumaVentas += precioMaquina(ventasTodas[i].componentes);
    }
  }
  return sumaVentas;
};

console.log(ventasMes(1, 2019));

// const ventasTodas = local.ventas
// console.log(ventasTodas)
// const componentesTodos = ventasTodas.componentes
// console.log(componentesTodos)
// const ventasMes = (mes, anio) => {
//   mes === ventasTodas.fecha.getMonth() ? ventasTodas.length : 0

// }
console.log(ventasMes(3, 2019));

//componenteMasVendido
//Crear una funcion componenteMasVendido(), devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente.

// cantidadVentasComponente(componente)

const cantidadVentasComponente = (componente) => {
  let cantidadVentas = 0;
  for (const articulo of local.ventas) {
    for (const unArticulo of articulo.componentes) {
      if (componente === unArticulo) {
        cantidadVentas += 1;
      }
    }
  }
  return cantidadVentas;
};
console.log(cantidadVentasComponente());

const componenteMasVendido = () => {
  let ventasComponentes = [];
  const precios = local.precios;
  for (const componente of local.precios) {
    ventasComponentes.push(cantidadVentasComponente(componente.componente));
  }
  const masVentas = Math.max(...ventasComponentes);
  for (const componente of local.precios) {
    if (masVentas === cantidadVentasComponente(componente.componente)) {
      return componente.componente;
    }
  }
};
console.log(componenteMasVendido());

/*
const componenteMasVendido = () => {
  let ventasComponentes = []
  const precios = local.precios
  
  for (const componente of local.precios){
    ventasComponentes.push(cantidadVentasComponente(componente.componente))
    // if === cantidadVentasComponente(componente.componente)){
    //   return componente
    // }
  }
  
  const masVentas = Math.max(...ventasComponentes)
  
  for (const componente of local.precios){
    if(masVentas === cantidadVentasComponente(componente.componente)){
      return componente.componente
    }
  
  }
  // for (const unComponente of ventasComponentes){
  //   console.log(Math.max(unComponente))
  //   if (unComponente > unComponente){
  //     console.log(local.precios.componente)
  //   }
  console.log()
  console.log(masVentas)
  //console.log(cantidadVentasComponente(local.precios.componente))
}
console.log(componenteMasVendido());
*/

/* 
const componenteMasVendido = () => {
  const componentesVentas = [];
  const cadaVenta = local.ventas;
  let componenteMayorVenta = [];
  //console.log(cantidadVentasComponente(cadaVenta.componentes))
  //console.log(cadaVenta.componentes)
  for (const cadaComponente of cadaVenta) {
    //console.log(cadaComponente.componentes)
    //console.log(cantidadVentasComponente(cadaComponente.componentes))
   for (const componente of cadaComponente.componentes) {
    console.log((componente))


     //console.log(cantidadVentasComponente(componente))
      //console.log(Math.max(cantidadVentasComponente(componente)))
      // if(Math.max(cantidadVentasComponente(componente))){
      //   console.log(componenteMayorVenta.push(componente))
      // }
      // console.log(componenteMayorVenta.push(cantidadVentasComponente(componente)))
      // console.log(Math.max(componenteMayorVenta))
      //console.log(componente)
      //if ((cantidadVentasComponente(componente))) {
        //componenteMayorVenta = cantidadVentasComponente(componente);
        //console.log(Math.max(cantidadVentasComponente(componente)))
      //}
      
    }
    
  }
  return componentesVentas
};
*/

/*
for (const cadaComponente of cadaVenta) {
     console.log(cadaComponente)
    for (const nombreComponente of cadaComponente.componentes) {
      console.log(cadaComponente.componentes)
      // if (!componentesVentas.includes(nombreComponente)) {
      //   componentesVentas.push(nombreComponente);
      // }
      //  console.log(componentesVentas)
       const sumatoriaVentas = 0
       if(cantidadVentasComponente(nombreComponente) > sumatoriaVentas){
              
      }
      return nombreComponente
    }
  }
*/
/*
const componenteMasVendido = () => {
  const componentesVentas = [];
  const cadaVenta = local.ventas;
  for (const cadaComponente of cadaVenta) {
    //console.log(cadaComponente)
    for (const nombreComponente of cadaComponente.componentes) {
      if (!componentesVentas.includes(nombreComponente)) {
        componentesVentas.push(nombreComponente);
      }
    }
  }
  console.log(componentesVentas);
  const componenteMasVendido = {};
  for (const componente of componentesVentas) {
    console.log(componente);
    componenteMasVendido[componente] = cantidadVentasComponente(componente);
  }
};
*/
// const componenteMasVendido = () => {
//   const componentesVentas = [];
//   const cadaVenta = local.ventas;
//   for (const cadaComponente of cadaVenta) {
//     //console.log(cadaComponente)
//     for (const nombreComponente of cadaComponente.componentes) {
//       if (!componentesVentas.includes(nombreComponente)) {
//         componentesVentas.push(nombreComponente);
//       }
//     }
//   }

// const ventasComponentes = (Object.values(cantidadVentasComponente))
//     const nombreComponentes = Object.keys (cantidadVentasComponente)
//     console.log(ventasComponentes)
//     console.log(nombreComponentes)
//     let componenteMayorVenta = 0
//     for (const unaVentaComponente of ventasComponentes){
//       if (unaVentaComponente > componenteMayorVenta){
//         componenteMayorVenta = unaVentaComponente
//       }
//         //console.log(unaVentaComponente)
//     }
//       // if (componenteMayorVenta = unaVentaComponente){
//       //   console.log (nombreComponentes)
//       // }
//     }
// console.log(componenteMasVendido)
// //return componentesVentas

// console.log(componenteMasVendido());

/*
const ventasComponentes = (Object.values(componenteMasVendido))
    const nombreComponentes = Object.keys (componenteMasVendido)
    console.log(ventasComponentes)
    console.log(nombreComponentes)
    let componenteMayorVenta = 0
    for (const unaVentaComponente of ventasComponentes){
      if (unaVentaComponente > componenteMayorVenta){
        componenteMayorVenta = unaVentaComponente
      }
        //console.log(unaVentaComponente)
    }
      if (componenteMayorVenta = unaVentaComponente){
        return nombreComponentes
      }
*/
/*
for (let i = 1; i < componenteMasVendido.length; i++){
      if(ventasComponentes[0] > ventasComponentes[i]){
        return componenteMasVendido
      }
*/

// const componenteMasVendido = () => {
//   const componenteVentas = []
//   for (const venta of local.ventas){

/*
const componenteMasVendido = {}
  for (const componente of componentesVentas){
    console.log(componente)
      componenteMasVendido[componente] = cantidadVentasComponente(componente)
      //console.log(componenteMasVendido)
  }
*/
// }
//
//ventasVendedora
//Crear una funcion ventasVendedora(nombre) debe obtener las ventas totales realizadas por una vendedora sin límite de fecha.

const ventasVendedora = (nombre) => {
  let ventasTotalesVendedora = 0;
  for (const venta of local.ventas) {
    if (venta.nombreVendedora === nombre) {
      ventasTotalesVendedora += 1;
    }
  }
  return ventasTotalesVendedora;
};

console.log(ventasVendedora("Grace"));
//ventasSucursal
//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

const ventasSucursal = (sucursal) => {
  let ventasSucursales = 0;
  for (const venta of local.ventas) {
    if (venta.sucursal === sucursal) {
      ventasSucursales += 1;
    }
  }
  return ventasSucursales;
};

console.log(ventasSucursal("Caballito"));
console.log(ventasSucursal("Centro"));

//optimizacion
//Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

const ventasOptimizadas = (propiedad, nombre) => {
  let ventas = 0;
  for (const venta of local.ventas) {
    if (venta[propiedad] === nombre) {
      ventas += 1;
    }
  }
  return ventas;
};

console.log(ventasOptimizadas("sucursal", "Centro"));
console.log(ventasOptimizadas("nombreVendedora", "Grace"));

//sucursalDelMes
//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const sucursalDelMes = (mes, anio) => {
  const ventasTotales = local.ventas;
  for (let i = 1; i < ventasTotales.length; i++) {
    if (
      ventasTotales[i].fecha.getMonth() === mes &&
      ventasTotales[i].fecha.getFullYear() === anio
    ) {
      if (
        precioMaquina(ventasTotales[0].componentes) >
        precioMaquina(ventasTotales[i].componentes)
      ) {
        return ventasTotales[i].sucursal;
      }
    }
  }
  return "Este mes y año no hubo ventas";
};

console.log(sucursalDelMes(1, 2019));

//optimizacion // BONUS

const loMejorDelMes = (mes, anio, propiedad) => {
  const ventasTotales = local.ventas;
  for (let i = 1; i < ventasTotales.length; i++) {
    if (
      ventasTotales[i].fecha.getMonth() === mes &&
      ventasTotales[i].fecha.getFullYear() === anio
    ) {
      if (
        precioMaquina(ventasTotales[0].componentes) >
        precioMaquina(ventasTotales[i].componentes)
      ) {
        return ventasTotales[i][propiedad];
      }
    }
  }
  return "Este mes y año no hubo ventas";
};

console.log(loMejorDelMes(1, 2019, "sucursal"));
console.log(loMejorDelMes(7, 2019, "sucursal"));
console.log(loMejorDelMes(3, 2019, "nombreVendedora"));

//renderPorMes
//Crear una funcion renderPorMes() que muestre una lista ordenada del importe total vendido por cada mes/año (usar console.log, no crear una lista en html).
