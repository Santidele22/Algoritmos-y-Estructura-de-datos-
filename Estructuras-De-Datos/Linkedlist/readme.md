#Listas enlazadas

##Introducción
La lista enlazada es un TDA(Tipo de dato abstracto) que nos permite almacenar datos de una forma organizada, al igual que los vectores pero, a diferencia de estos, esta estructura es dinámica, por lo que no tenemos que saber "a priori" los elementos que puede contener.

En una lista enlazada, cada elemento apunta al siguiente excepto el último que no tiene sucesor y el valor del enlace es null. Por ello los elementos son registros que contienen el dato a almacenar y un enlace al siguiente elemento. Los elementos de una lista, suelen recibir también el nombre de **nodos** de la lista.

Es importante notar que los elementos no están almacenados de manera consecutiva en la memoria, sino que pueden estar dispersos en diferentes ubicaciones. La conectividad entre los elementos permite un acceso eficiente a través de la lista, facilitando la inserción y eliminación de elementos en comparación con algunas otras estructuras de datos.

##Tipos de listas enlazadas

- **Lista enlazada simple**: Lista enlazada en la que cada nodo contiene un único campo de enlace al elemento sucesor.

- **Lista doblemente enlazadas**: Lista enlazada en la que cada nodo contiene doble vía de enlace, los nodos apuntan tanto al elemento sucesor como el antecesor.

- **Lista enlazada circular**: Semejante a la lista enlazada simple, con la distinción que el último nodo apunta hacía el primer nodo de la lista.