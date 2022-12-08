/*
Multiplicar 2 cedenas y poner el resultado en otra cadena (lenguaje C)
https://foro.elhacker.net/programacion_cc/multiplicar_2_cedenas_y_poner_el_resultado_en_otra_cadena_lenguaje_c-t422140.0.html
*/
int main(void)
{
    char a[] = "914", b[] = "3", mult[4];
    int i, j, result = 0, resto = 0, operUno = 0, operDos = 0;
 
    for(i = j = 2; i >= 0; i--, j--)
    {
        operUno = a[i] - '0', operDos = b[0] - '0';
        result = operUno * operDos + resto;
        if (result >= 10)
        {
            resto = result / 10;
            result -= resto * 10;
        }
        else
            resto = 0;
        mult[j] = result;
    }
    if (resto)
    {
        for( i = 3; i > 0; i--)
            mult[i] = mult[i - 1];
        mult[0] = resto;
    }
    for(i = 0; i < 4 ; i++)
        printf("%d", mult[i]);
 
    return 0;
}