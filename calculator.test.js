
import { add, restar, dividir, multiplicar, dividirOpcionLaura, exponencialOpcion, exponencial,  } from './calculator'
import { expect, test } from 'vitest'



test('Add numbers using the add method', () => {
     //given
     const x = 13
     const y = 0
     //when
     const functionSuma = add(x, y)
     //then
     const resultadoEsperado = 13

     expect(functionSuma).toBe(resultadoEsperado)
     

})

test('Restar números usando el método resta', () => {
     //given
     const x = 10
     const y = 5
     //when
     const functionRestar = restar(x, y)
     //then
     const resultadoEsperado = 5

     expect(functionRestar).toBe(resultadoEsperado)
})

test('Multiplicar números usando el método multiplicar', () => {
     //given
     const x = 2
     const y = 2
     //when
     const functionMultiplicar = multiplicar(x, y)
     //then
     const resultadoEsperado = 4

     expect(functionMultiplicar).toBe(resultadoEsperado)
})

test('Dividir números usando el método dividir', () => {
     //given
     const x = 2
     const y = 2
     //when
     const functionDividir = dividir(x, y)
     //then
     const resultadoEsperado = 1

     expect(functionDividir).toBe(resultadoEsperado)
})

test('Dividir por cero números usando el método dividir', () => {
     //given
     const x = 2
     const y = 0
     //when
     const functionDividir = dividir(x, y)
     //then
     const resultadoEsperado = 0

     expect(functionDividir).toBe(resultadoEsperado)
})

test('DividirOpcionLaura por cero números usando el método DividirOpcionLaura', () => {
     //given
     const x = 2
     const y = 0
     //when
     const functionDividirOpcionLaura = dividirOpcionLaura(x, y)
     //then
     const resultadoEsperado = 0

     expect(functionDividirOpcionLaura).toBe(resultadoEsperado)
})

test('Exponencial multiplica el primer parametro el numero de veces del segundo parametro', () => {
     //given
     const base = 2
     const exponente = 2
     //when
     const resultado = exponencial(base, exponente)
     //then
     const resultadoEsperado = 4

     expect(resultado).toBe(resultadoEsperado)
})

test('Exponencial devuelve que el exponente no puede ser menor de cero', () => {
     //given
     const base = 2
     const exponente = -2
     //when
     const resultado = exponencial(base, exponente)
     //then
     const resultadoEsperado = "El exponente no puede ser menor de cero"

     expect(resultado).toBe(resultadoEsperado)
})

test('Si la base es menor de cero y el exponente es impar el resultado es menor de cero', () => {
     // Given
     const parametro1 = -2
     const parametro2 = 3
     const resultadoEsperado = -8;
     //When
     const resultado = exponencial(parametro1, parametro2)
     //Then
     expect(resultado).toBe(resultadoEsperado);
})


test('Funcion propia de exponente partiendo de la multiplicación', () => {
//Given
const base = 3
const exponente = 3
const resultadoEsperado = 27
//When
const resultado = exponencialOpcion(base, exponente)

//Then
expect(resultado).toBe(resultadoEsperado)

})