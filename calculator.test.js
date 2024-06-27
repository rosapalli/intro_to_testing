
import { add } from './calculator'
import { expect, test } from 'vitest'


test('Add numbers using the add method'), () => {
     //given
     const x = 13
     const y = 0
     //when
     const functionSuma = add(x, y)
     //then
     const resultadoEsperado = 13

     expect(functionSuma).toBe(resultadoEsperado)
     

}

test('Restar números usando el método resta'), () => {
     //given
     const x = 10
     const y = 5
     //when
     const functionRestar = restar(x, y)
     //then
     const resultadoEsperado = 5

     expect(functionRestar).toBe(resultadoEsperado)
}

test('Multiplicar números usando el método multiplicar'), () => {
     //given
     const x = 2
     const y = 2
     //when
     const functionMultiplicar = multiplicar(x, y)
     //then
     const resultadoEsperado = 4

     expect(functionMultiplicar).toBe(resultadoEsperado)
}


