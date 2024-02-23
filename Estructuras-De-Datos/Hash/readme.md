# Tablas Hash
### Que son? 
Una **tabla hash**, matriz asociativa, hashing, mapa hash, tabla de dispersión o tabla fragmentada es una estructura de datos que implementa el tipo de dato abstracto llamado diccionario (tipo de dato abstracto). Esta asocia llaves o claves con valores.​La operación principal que soporta de manera eficiente es la búsqueda: permite el acceso a los elementos (teléfono y dirección, por ejemplo) almacenados a partir de una clave generada (usando el nombre o número de cuenta, por ejemplo). Funciona transformando la clave con una **función hash** en un hash, un número que identifica la posición (casilla o cubeta) donde la tabla hash localiza el valor deseado.
## Funcion Hash
Una función hash es cualquier función que pueda utilizarse para mapear un conjunto de datos de un tamaño arbitrario a un conjunto de datos de un tamaño fijo, que cae en la tabla hash. Los valores devueltos por una función hash se denominan valores hash, códigos hash, sumas hash o simplemente hashes.
Para conseguir un buen mecanismo hash, es importante tener una buena función hash con los siguientes requisitos básicos:
- **Fácil de calcular**: Debe ser fácil de calcular y no debe convertirse en un algoritmo en sí mismo.
- **Distribución uniforme**: Debe proporcionar una distribución uniforme a través de la tabla hash y no debe dar lugar a agrupaciones.
- **Menos colisiones**: Las colisiones se producen cuando pares de elementos se asignan al mismo valor hash. Estas deben evitarse.
Nota: Independientemente de lo buena que sea una función hash, es **inevitable que se produzcan colisiones**. Por lo tanto, para mantener el rendimiento de una tabla hash, es importante gestionar las colisiones mediante diversas técnicas de resolución de colisiones.
### Tipos de funciones
- **Hash de división**: Dado un diccionario D, se fija un número m >= |D| (m mayor o igual al tamaño del diccionario) y que sea primo no cercano a potencia de 2 o de 10. Siendo k la clave a buscar y h(k) la función hash, se tiene h(k)=k%m (Resto de la división k/m).
- **Hash de multiplicación**: Si por alguna razón, se necesita una tabla hash con tantos elementos o punteros como una potencia de 2 o de 10, será mejor usar una función hash de multiplicación, independiente del tamaño de la tabla. Se escoge un tamaño de tabla m >= |D| (m mayor o igual al tamaño del diccionario) y un cierto número irracional φ (normalmente se usa 1+5^(1/2)/2 o 1-5^(1/2)/2). De este modo se define h(k)= Suelo(m*Parte fraccionaria(k*φ))
- **Hash por plegamiento**: El método de plegado para construir las funciones hash comienza dividiendo el ítem en partes del mismo tamaño (la última parte puede que no sea del mismo tamaño). Luego se suman estas partes para obtener el valor hash resultante. Por ejemplo, si nuestro ítem era el número telefónico 436-555-4601, tomaríamos los dígitos y los dividiríamos en grupos de 2 (43,65,55,46,01). Después de la suma 43+65+55+46+01, obtendremos 210. Si asumimos que nuestra tabla hash tiene 11 ranuras, entonces necesitamos realizar el paso adicional de dividir entre 11 y recordar el residuo. En este caso 210 % 11 es 1, por lo que el número telefónico 436-555-4601 se asigna a la ranura 1. Algunos métodos de plegado van un paso más allá e invierten cada una de las otras partes antes de la suma. Para el ejemplo anterior obtendríamos 43+56+5+64+01=219 lo cual da 219 % 11=10.
## Que son las colisiones? 
Se produce una colisión cuando dos datos pasan por la misma función hash y devuelven el mismo código hash.
### Metodos para solucionar colisiones
 una estrategia común para manejar las colisiones es el **Encadenamiento Separado**(Chaining):, en lugar de almacenar el valor directamente en la tabla hash, lo almacenamos en una **Lista Enlazada**, y la clave generada apunta a esa Lista Enlazada. Si hubiera demasiadas colisiones, buscar un valor llevaría una complejidad de tiempo lineal O(n) en lugar de O(1), este tiempo puede reducirse a O(log n) utilizando otra estructura de datos como un **Árbol de Búsqueda Binario**
### Bibliografia
 - https://es.wikipedia.org/wiki/Tabla_hash
 - https://learn.microsoft.com/es-es/powershell/scripting/learn/deep-dives/everything-about-hashtable?view=powershell-7.4
 - https://www.youtube.com/watch?v=dIaNpQZvd0g&list=TLPQMjIwMjIwMjR7bT3bN8MkQw&index=4
 - https://www.freecodecamp.org/espanol/news/tabla-hash-en-javascript-hash-de-arreglo-asociativo-en-js/
 - https://www.thedshandbook.com/hash-tables/
 - https://13dipty.medium.com/hash-table-with-chaining-5f91cf73f659
 - https://www.youtube.com/watch?v=LluB6jU-SwY
 - https://es.slideshare.net/analivecastrovargas/funcion-hash-metodos-de-divisi