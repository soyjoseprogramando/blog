
---
title: "Guia para aprender algoritmos"
tags: ["algoritmos", "programacion", "aprendizaje", "pensamiento lógico"]
---

# Guía Para Aprender Algoritmos de Cero a Experto

## 📘 ¿Qué son los algoritmos?

Un **algoritmo** es una serie de pasos ordenados que resuelven un problema o realizan una tarea. En programación, usamos algoritmos para que nuestras aplicaciones hagan cosas de forma eficiente y correcta.


---

## 🧱 Vamos a estudiar

1. **Lógica y estructuras de control**
2. **Estructuras de datos básicas (arrays, objetos, stacks, queues, etc.)**
3. **Técnicas algorítmicas (recursión, backtracking, divide & conquer)**
4. **Algoritmos clásicos (búsqueda, ordenamiento, etc.)**
5. **Complejidad temporal y espacial (Big O)**
6. **Resolución de problemas paso a paso**

## 🧠 Cómo sacarle el máximo provecho a este blog

Para que realmente aprendas a pensar como programador, **no te saltes directamente a la solución**. El verdadero valor está en el proceso, no en el resultado final.

Te recomiendo seguir estos pasos:

1. **Intenta resolver cada ejercicio por tu cuenta.**  
   Dedícale al menos **2 horas**, y como máximo **4 horas**. Ese esfuerzo mental es lo que te hará mejorar.
2. **Investiga por tu cuenta.**  
   Lee la documentación de los métodos de JavaScript, busca pistas, revisa ejemplos, intenta diferentes enfoques... pero **no busques directamente la solución completa**. La clave está en que **desarrolles tu pensamiento lógico y algorítmico**.
3. **¿Nada funciona? Entonces sí, mira la solución.**  
   Pero solo después de haber escrito, leído, investigado y probado por ti mismo. Cuando leas la solución, **analízala paso a paso**. Si aún no entiendes, entonces:
4. **Usa la inteligencia artificial como última herramienta.**  
   Pídele que te explique el algoritmo, que te dé analogías, que simplifique conceptos, que te de una lista de cosas que previamente ya deberías saber para entenderlo. Es una gran herramienta, **si ya hiciste el esfuerzo previo**. Pide explicaciones distintas hasta que entiendas de verdad.

💡 **Recuerda:** aprender algoritmos no es memorizar pasos, sino aprender a **pensar como un programador**. Este blog está hecho para que desarrolles esa mentalidad desde cero.

## 🧭 Primera Lección: Lógica básica y estructuras de control

La base para aprender algoritmos es entender de pies a cabeza como funcionan los bucles. Para ello vamos a hacer algunos ejercicios.

---

### 🔸Ejercicio 1: Par o impar

Crea una función que reciba un número y devuelva `true` si es par o `false` si es impar.

```js
function esParOImpar(num) {
  // Tu código aquí
}
```

### Solución

```js
function esParOImpar(num) {
  return num % 2 === 0;
}
```

Esta solución se basa en el **operador módulo `%`**, que devuelve el **residuo** de una división.

---

**📘 ¿Qué es el residuo?**

Imagina que divides 5 entre 3:

```js
5 / 3 = 1.666
```

Nos da 1.666, pero el operador `%` no se interesa en los decimales. Solo quiere saber **cuánto sobra** después de hacer divisiones completas. En este caso:

```js
5 % 3 === 2;
```

¿Por qué? Porque **3 cabe una vez en 5**, y **sobra 2**.

** 👕 Ejemplo cotidiano: repartir camisas **

- Si tienes **3 camisas** y **2 niños**, puedes darles **1 camisa a cada uno**, pero **te sobra una**. Esa camisa sobrante es el **residuo**:
  ```js
  3 % 2 === 1;
  ```
- Si tienes **4 camisas** y **2 niños**, puedes repartirlas perfectamente:
  ```js
  4 % 2 === 0;
  ```

---

**✅ Aplicando esto a la función**

La lógica es simple:

- Si un número dividido entre 2 **no deja residuo**, es **par**.
- Si deja residuo, es **impar**.

Así que esta función:

```js
function esParOImpar(num) {
  return num % 2 === 0;
}
```

Nos dirá `true` si el número es par, y `false` si es impar.

Probemos con algunos valores:

**Caso impar:**

```js
esParOImpar(7); // 7 % 2 === 1 → false
```

Imagina 7 camisas para 2 niños. Cada uno recibe 3 camisas, pero **sobra 1**. No es par.

**Caso par:**

```js
esParOImpar(8); // 8 % 2 === 0 → true
```

8 camisas entre 2 niños. Cada uno recibe 4 camisas. **No sobra nada**, por lo tanto, es par.
