import axios from 'axios'
export default class PersonaService {

    url = 'http://localhost:9000/api/paises'

    getAll () {
      return axios.get(this.url)
    }

    getOne (id) {
      alert('Get One realizado satisfactoriamente')
      return axios.get(this.url+'/'+id)
    }

    save (instrumento) {
      this.instrumento = instrumento
      console.log('Save instrumento',this.instrumento)
      return axios.post(this.url, this.instrumento)
    }

    delete (id) {
      return axios.delete(this.url + id)
    }

    update(instrumento){
      this.instrumento = instrumento
      alert('Instrumento modificado satisfactoriamente')
      return axios.put(this.url + '/' + this.instrumento.id, this.instrumento)
  } 
}
