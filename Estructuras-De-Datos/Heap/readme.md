# Heaps
En computación, un montículo (o heap en inglés) es una estructura de datos del tipo árbol con información perteneciente a un conjunto ordenado. Los **montículos máximos** tienen la característica de que cada nodo padre tiene un valor mayor que el de cualquiera de sus nodos hijos, mientras que en los **montículos mínimos**, el valor del nodo padre es siempre menor al de sus nodos hijos.

Un árbol cumple la condición de montículo si satisface dicha condición y además es un árbol binario casi completo. Un **árbol binario** es completo cuando todos los niveles están llenos, con la excepción del último, que se llena desde la izquierda hacia la derecha.

La representación más usada son los **Binary Heaps** (montículos binarios) que tienen la estructura de un árbol binario. La forma más usada para almacenar los datos en esta estructura es un **Array** (dinámico por lo general), esto genera un árbol binario completo, por lo que sabemos de antemano su forma y con simple aritmética podemos calcular los índices en el array de los nodos hijos a partir del padre y viceversa.

 ### Formula 
 - primer elemento(i) = 0
 - izquierda(i) = 2i + 1
 - derecha(i) = 2i + 2
 - padre(i) = i / 2

## Operaciones Basicas
Las operaciones básicas (No necesariamente con estos nombres) de un Heap son: 
- Add(item) Inserta un ítem en el montículo y lo reordena.
- GetTop() – Regresa el ítem del tope (El mayor o menor).
- RemoveTop() – Elimina un ítem del tope (El mayor o menor según sea el caso) y lo retorna.
- Heapify(array, from)  - Mantiene la propiedad del montículo (Mayor o menor item en el tope).
- Left(rootIndex) – Calcula el índice del hijo izquierdo a partir del índice del padre (rootIndex * 2) + 1
- Right(rootIndex) – Calcula el índice del hijo derecho a partir del índice del padre (rootIndex * 2) + 2
- Root(rootIndex) – Calcula el índice del padre a partir del hijo (izquierdo o derecho) (rootIndex – 1) / 2

## Heap Sort
Heapsort es un  Algoritmo de ordenación O(nlogn) que funciona construyendo primero un montón a partir de la lista y extrayendo repetidamente la raíz de la parte superior del montón y reconstruyéndola hasta que no quedan elementos en el montón. Los valores que se extraen de la parte superior del montón salen ordenados. Si el montón utilizado era un min-heap, la lista resultante estará en orden ascendente, y un max-heap los dará en orden descendente.

### Bibligrafia
- https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/
- https://www.growingwiththeweb.com/2012/11/algorithm-heapsort.html
- https://programagic.blogspot.com/2016/12/algoritmo-heap-sort.html
- http://programagic.blogspot.com/2016/11/heaps-monticulos.html
- https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82
- https://www.youtube.com/watch?v=2DmK_H7IdTo