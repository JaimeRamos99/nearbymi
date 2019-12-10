const Base_api = 'http://localhost:3001/'
class Api {
    async registerFacebook() {
        try {
            let query = await fetch(`${Base_api}crearUsuarioFacebook/`, { method: 'POST' })
            let queryJson = await query.json()
            return queryJson
        }
        catch (error) {
            console.log("Esto es un error atrapado en la función register de la clase api ")
        }
    }
}
export default new Api();