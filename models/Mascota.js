/** Clase que representa un animalito a adoptar */
class Mascota{
	constructor(id, nombre, categoria, foto, descripcion, anunciante, ubicacion){
    this.id = id;
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
    this.categoria = categoria; // perro | gato | otro
    this.foto = foto; // links a las fotografías
    this.descripcion = descripcion; // descripción del anuncio
    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
    this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}

module.exports = Mascota;
