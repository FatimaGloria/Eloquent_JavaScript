/* 1. Haciendo un triángulo con bucles
Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:

#
##
###
####
#####
######
#######

Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo .length después de ella.
*/

for (let index = "#"; index.length <= 7; index += "#") { 
    console.log(index); 
} 

