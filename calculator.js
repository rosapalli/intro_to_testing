export function add(a, b) {
     return a + b
}

export function restar(a, b) {
     return a - b
}

export function multiplicar(a, b) {
     return a * b
}

export function dividir(dividendo, divisor) {
     if (divisor === 0) {
          return 0;
     } else {
          return dividendo/divisor ;
     }
}

export function dividirOpcionLaura(dividendo, divisor) {
     return (divisor === 0) ? 0 : dividendo / divisor;
}

export function exponencial(base, exponente) {
     if (exponente < 0) {
          return "El exponente no puede ser menor de cero"
     }
     return base ** exponente
}

export function exponencialOpcion( base, exponente) {
     //base multiplicada si misma tantas veces como el numero del exponente
     let resultado = base;
     for (let i = 1; i < exponente; i++){
          resultado = resultado * base;
          
     }
     return resultado
}
