# SOLID
# Principios SOLID de Diseño de Software

Los principios SOLID son una serie de directrices de diseño de software que ayudan a desarrollar código limpio, mantenible y escalable. Estos principios fueron propuestos por Robert C. Martin, también conocido como "Uncle Bob", y son fundamentales para escribir software de alta calidad.

## 1. Principio de Responsabilidad Única (SRP)

El Principio de Responsabilidad Única establece que una clase debería tener una única razón para cambiar. Es decir, una clase debería tener una sola responsabilidad en el sistema. Esto promueve la cohesión y facilita el mantenimiento del código. 
A continuacion algunos ejemplos de uso:
- Mal ejemplo: Una clase Usuario que se encarga de gestionar la lógica de negocio del usuario y también de la persistencia en la base de datos.
- Buen ejemplo: Dividir la funcionalidad en dos clases separadas: una para la lógica de negocio del usuario (Usuario) y otra para la persistencia en la base de datos (UsuarioRepository).

## 2. Principio de Abierto/Cerrado (OCP)

El Principio de Abierto/Cerrado establece que una entidad de software debe estar abierta para su extensión pero cerrada para su modificación. Esto se logra mediante el uso de abstracciones y polimorfismo, permitiendo que el código pueda ser extendido sin necesidad de modificar su implementación original.
A continuacion algunos ejemplos de uso:
- Mal ejemplo: Una clase Forma con un método calcularArea que solo puede calcular áreas para cuadrados y círculos. Si se necesita agregar una nueva forma (por ejemplo, un triángulo), se tendría que modificar el código existente.
- Buen ejemplo: Crear una interfaz Forma con un método calcularArea, y luego implementar esta interfaz en clases separadas para cada tipo de forma (por ejemplo, Cuadrado, Círculo, Triángulo). Si se necesita agregar una nueva forma, simplemente se crea una nueva clase que implemente la interfaz Forma sin modificar el código existente.

## 3. Principio de Sustitución de Liskov (LSP)

El Principio de Sustitución de Liskov establece que los objetos de un programa deben ser reemplazables por instancias de sus subtipos sin afectar la corrección del programa. En otras palabras, los subtipos deben poder sustituir a sus tipos base sin cambiar el comportamiento esperado del programa.
A continuacion algunos ejemplos de uso:
- Mal ejemplo: Tener una clase Cuadrado que hereda de una clase Rectángulo, donde se modifica el comportamiento del método setAltura para que también actualice el ancho.
- Buen ejemplo: Seguir el principio de "Es un" en lugar del principio de "Tiene un". En este caso, Cuadrado y Rectángulo podrían ser subclases de una clase abstracta Forma, y ambas podrían implementar métodos getArea y getPerímetro de manera apropiada sin necesidad de modificar el comportamiento heredado.

## 4. Principio de Segregación de Interfaces (ISP)

El Principio de Segregación de Interfaces establece que los clientes no deben ser forzados a depender de interfaces que no utilizan. En lugar de tener interfaces grandes y monolíticas, es preferible tener interfaces más pequeñas y específicas, lo que promueve la cohesión y evita la dependencia no deseada.
A continuacion algunos ejemplos de uso:
- Mal ejemplo: Tener una interfaz Impresora que contiene métodos para imprimir, escanear, copiar y enviar fax. Esto obligaría a todas las clases que implementan Impresora a proporcionar implementaciones para todas estas funcionalidades, incluso si no las necesitan.
- Buen ejemplo: Dividir la interfaz Impresora en interfaces más pequeñas y específicas, como Impresora, Escáner, Copiadora y Fax. De esta manera, las clases pueden implementar solo las interfaces que necesitan.

## 5. Principio de Inversión de Dependencia (DIP)

El Principio de Inversión de Dependencia establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino que ambas deben depender de abstracciones. Esto se logra mediante el uso de interfaces o clases abstractas para desacoplar componentes del sistema y permitir una mayor flexibilidad y reutilización del código.
A continuacion algunos ejemplos de uso:
- Mal ejemplo: Una clase Envío que depende directamente de una clase ServicioDeCorreo. Esto acoplaría la clase Envío a una implementación específica de servicio de correo.
- Buen ejemplo: Introducir una interfaz ServicioDeCorreo que define métodos genéricos como enviarCorreo, y hacer que la clase Envío dependa de esta interfaz en lugar de una implementación concreta. Luego, se puede inyectar cualquier implementación de ServicioDeCorreo (por ejemplo, ServicioDeCorreoSMTP, ServicioDeCorreoREST) en Envío sin necesidad de modificar su código.

Estos principios, cuando se aplican de manera conjunta, ayudan a crear sistemas de software más flexibles, mantenibles y extensibles, lo que facilita la adaptación a los cambios en los requisitos del negocio y la evolución del software a lo largo del tiempo.
