El parcial se inició con la fabricación de una pantalla de login, dicha pantalla se realizo de manera que reaccione a la variable "auth", en el caso de que si dicha variable fuera true entonces pasara a la pantalla de las partes de autos, ademas se manejaron 2 pantallas del login, una para correo y otra para contraseña, los cuales eran condicionados por la variable "emailgood", si esta era true entonces se pasaba a la pantalla de contraseña.

En cuanto a la pantalla de partes de autos, se logro mostrar los detalles en una card incluyendo las traducciones realizadas desde los archivos en.json y es.json correspondientes a los idiomas ingles y español respectivamente, los cuales estan condicionados por el idioma del navegador, esto a traves de IntlProvider de la libreria "react-intl".

A pesar de que estan diseñados los componentes de login, no fue posible realizar el enlace entre las vistas, esto debido a posibles lecturas erroneas de las variables que condicionaban el render y errores en la lectura de los datos del mockup del backend, los cuales se usó un UseEffect para que se leyera desde Mockaroo haciendo uso de las CORS.


*Pido porfavor que el parcial sea calificado la totalidad de los cambios ya que a la hora de realizarlo me quede bloqueado ya que no habia dormido mucho la noche anterior a la presentacion del parcial, no me gusta esto pero siento que si se califica el release que mande en el momento voy a perder el parcial, si es requerido podria sustentar mi solución para que se compruebe que no fue hecho con ChatGPT o alguna inteligencia artificial generativa.*

Jesús Alejandro Dávila Pinchao - 202014263
