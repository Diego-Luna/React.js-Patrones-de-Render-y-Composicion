# React.js-Patrones-de-Render-y-Composicion

## Filosofía y principios de diseño en React

- Abstracciones comunes: se refiere que a React no quiere incluir código inútil en su core, código que sea demasiado especifico para caso de uso demasiado concreto. Sin embargo, existen excepciones.
- Interoperabilidad: React trata de trabajar bien con otras bibliotecas de interfaz de usuario.
- Estabilidad: React va a mantener sus apis, componentes, funcionamiento, etc… aunque estén descontinuados para no romper el código que usamos.
- Válvulas de escape: Cuando React quiera descontinuar un patrón que no les gusta, es sus responsabilidad considerar todos los casos de uso existentes para él, y antes de descontinuarlo educar a la comunidad respecto a las alternativas.
- Experiencia de desarrollo: el objetivo de React no es solo que con su código podamos solucionar nuestro problemas también van a buscar una solución que nos den una buena experiencia y disfrute.
- Implementación: Siempre que sea posible React preferirá código aburrido a código elegante. El código es descartable y cambia a menudo. Así que es importante que no introduzca nuevas abstracciones internas al menos que sea absolutamente necesario. Código detallado que sea fácil de mover, cambiar y eliminar es preferido sobre código elegante que esté abstraído de manera prematura y que sea difícil de cambiar.
- Optimizado para instrumentación: React siempre va a buscar el nombre mas distintivos y detallados(no necesariamente nombres largos).
- Dogfooding: significa que React va a periodizar la implementación de funcionalidades que necesite su empresa, Facebook, Esto tiene la ventaja no solo para su empresa sino también a todos los desarrolladores que utiliza React.
- Planificación: Acá es donde nosotros dividimos nuestras responsabilidades de los que debemos hacer y lo que tiene que hacer React por detrás con las descripciones que le hacemos.
- Configuración: React cree que una configuración global no funciona bien con la composición. Dado que la composición es central en React, no proveen configuración global en el código. React siempre se asegurara que nosotros tengamos compatibilidad entre cualquier librería y aplicación que utilicemos React.
- Depuración: se refiere que a React siempre va a dejarte pistas un rastro predecible, donde podamos buscar los errores en nuestra aplicación.

## 8.-Qué son las render props y render functions

Nos ayudan a elevar nuestra composición de componentes a otro nivel.

Las render props nos permiten ser más específicos sobre que vamos a renderizar, cuando y donde vamos a renderizar cada parte del contenido de nuestros componentes.

### Render Function

Es el patrón de entregar la información de nuestro componente en una función. No es exclusivo de react context, nosotros podemos crear nuestros propios componentes que usen este patrón, que reciban una función para que le podamos enviar la información que queremos proveer y luego si, renderizar los componentes que ya tienen la info gracias a la función.

### Render Props

Cuando ya no mandamos la función dentro del componente, si no que la enviamos en alguna otra propiedad del componente. Podemos jugar con este patrón para que compartir información sea más divertido.

## React.Children y React.cloneElement

Para poder pasar propiedades especiales a los componentes hijos de nuestros componentes contenedores cuando hacemos composición.

Cuando enviamos más de un componente o elemento hijo al que use CloneElement, la app deja de funcionar y suelta un error. CloneElement necesita recibir un elemento de react, cuando children es más de un componente entonces tenemos un array, para esto existe React.Children que nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children.

```js
function TodoHeader({ children, loading }) {
  //No importa si viene un elemento, o dos o null siempre nos devuelve un array

  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading })
      )}
    </header> //Por cada child vamos a llamar a clone element.
  ); //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
}
```

No son las herramientas más populares pero pueden ser muy útiles cuando queremos compartir una o ciertas props a los componentes hijos de un componente contenedor.

