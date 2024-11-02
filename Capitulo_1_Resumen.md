## Resumen Cap. 1: Valores, Tipos y Operadores 

### 1. Números 

Valores del tipo number: 
 
`13` 

Números fraccionarios se escriben usando un punto: 

`9.81` 

Números muy grandes o muy pequeños: 

`2.998e8 (2.998 × 108 = 299,800,000)`

### **Notas** 
* Cálculos con números enteros más pequeños que 9 cuatrillones siempre serán precisos. 

* Tratar los números digitales fraccionarios como aproximaciones, no como valores precisos, debido a que pierden algo de precisión cuando solo están disponibles 64 bits para almacenarlos. 


### 1.1 Números especiales 

* **Infinity y – Infinity**: representan el infinito positivo y negativo. Infinity - 1 sigue siendo Infinity, y así sucesivamente.  
Pero no es matemáticamente sólido y rápidamente te llevará al siguiente número especial: NaN. 

* **NaN** significa “no es un número”, aunque es un valor del tipo numérico. Se obtiene cuando la operación numérica no produzca un resultado significativo.

`0/0`   `Infinity - Infinity` 

### 2. Aritmética 

### Operadores: 

* Suma  `+` 

* Resta `-` 

* Multiplicación `*` 

* División `/`
* Residuo o módulo `%` 

 
### **Notas** 
* Colocar un operador entre dos valores aplicará ese operador a esos valores y producirá un nuevo valor.  

* Cuando los operadores aparecen juntos sin paréntesis, el orden en que se aplican se determina por la precedencia de los operadores, como en matemáticas. Cuando tengas dudas, simplemente agrega paréntesis. 

`1 - 2 + 1      -------   (1 – 2) + 1` 

### 3. Cadenas 

Para representar texto. Se escriben encerrando su contenido entre comillas.  

```
`En el mar` 

"Acostado en el océano" 

'Flotando en el océano' 
```
Saltos de línea:  

`"Esta es la primera línea\nY esta es la segunda"`

```
Esta es la primera línea 
 

Y esta es la segunda 
```
 
### **Notas**
* Las cadenas también deben ser modeladas como una serie de bits para poder existir dentro de la computadora. Se basa en el estándar Unicode. 

* El operador + se puede usar en ellas, no para sumar, sino para concatenar —unir dos cadenas 

`"con" + "cat" + "e" + "nar"  =  concatenar`

* Las cadenas entre acentos graves, generalmente llamadas template literals, aparte de poder abarcar varias líneas, también pueden incrustar otros valores:

`la mitad de 100 es ${100 / 2}` 

*Donde ${  } en este caso **100/2** se calcula y su resultado se convierte en una cadena, y se incluirá en esa posición:*

`la mitad de 100 es 50`

### **Operadores Unarios**
typeof:  produce un valor de cadena, indicando el tipo de dato correspondiente al valor proporcionado (opera sobre un solo valor). 

`console.log(typeof 4.5) → number`


