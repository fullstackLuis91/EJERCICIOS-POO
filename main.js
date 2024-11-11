// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona.

class Person {
    constructor(name, age, genre) {
      this.name = name
      this.age = age
      this.genre = genre

    }
    obtdetails() {
        console.log(
          `Tu nombre es ${this.name} tiene ${this.age} años  y tiene genero ${this.genre}`
        )
      }
    }

    let Luis = new Person ("Luis", 33, "masculino")
    Luis.obtdetails()


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por consola el resultado.

class Student extends Person {
    constructor(name, age, genre, course, group) {
        super(name, age, genre)
        this.course = course
        this.group = group
    }
register() {
    console.log(
        ` Tu nombre es ${this.name} tiene ${this.age} años  y tiene genero ${this.genre} ${this.course} ${this.group}`
    )
}

}

let Modificado = new Student ("Luis", 33, "masculino", "sexto", 9)
    Modificado.register()


// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por consola el resultado.
 
class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
        super(name, age, genre)
        this.asignatura = asignatura
        this.level = level
    }
    assign() {
        console.log(
            ` Tu nombre es ${this.name} tiene ${this.age} años  y tiene genero ${this.genre} ${this.asignatura} ${this.level}`
        )
    }

}

let Modificado2 = new Teacher ("Luis", 33, "masculino", "fullstack", "avanzado")
    Modificado2.assign()

