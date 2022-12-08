Fuente: http://www.aprendeaprogramar.com/mod/forum/discuss.php?d=383

Tienes que pensar en los pasos que hacer para dar una multiplicación "a mano":

 123
x 134
------
 492
369
123
------
16482

Es decir, primero tomas la última cifra del número inferior, y la vas multiplicando por cada una de las cifras del número superor (y teniendo en cuenta si "te llevas algo" porque el resultado sea mayo que 10).

Los únicos dos "trucos" necesarios son extraer cada cifra de la cadena (con los corchetes) y saber su valor numérico (la función "ord" te dice su código ASCII, que es 48 para el "0", 49 para el "1" y así sucesivamente).

Visto así, puede parecer que necesitas guardar todos los resultados intermedios de la multiplicación, pero si lo piensas un poco te darás cuenta de que no, de que te basta con guardar un único valor acumulado...