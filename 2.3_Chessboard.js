/*Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. 
En cada posición del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de ajedrez.

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #  

*/


/* Solución del libro https://eloquentjavascript.net/code */
let size = 8; 

let board = ""; 

for (let i = 0; i < size; i++) {  

     for (let n = 0; n < size; n++){ 

       if((n + i) % 2 == 0){ 

         board +=" "; 

       } else { 

         board += "#"; 

       } 

      } 

     board +="\n"; 

}  

console.log(board);  

 
