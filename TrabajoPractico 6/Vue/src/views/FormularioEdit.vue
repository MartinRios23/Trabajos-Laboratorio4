<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Nombre:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="instrumento.nombre"
          required
          placeholder="Nombre del instrumento:"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="instrumento.precio"
          required
          placeholder="Ingrese Precio"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Marca:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="instrumento.marca"
          required
          placeholder="Ingrese Marca"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Descripcion:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="instrumento.descripcion"
          required
          placeholder="Ingrese Descripcion"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="instrumento.envioGratis" id="checkboxes-5">
          <b-form-checkbox >EnvioGratis</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="input-group-6" v-model="instrumento.imagen">
        <div class="custom-file">
          <input type="file" @change="cambiarFoto" class="custom-file-input" id="customFile" name="imagen">
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ instrumento }}</pre>
    </b-card>
  </div>
</template>
<script>

import InstrumentoService from '../service/InstrumentoService'
export default {
  name: 'Formulario',
  data () {
    return {
      instrumento: {
        nombre: '',
        precio: '',
        marca: '',
        descripcion: '',
        envioGratis: null,
        imagen: ''
      }
    }
  },
  instrumentoService: null,
  created () {
    console.log('se ejecuta created Formulario, parametroo: ' + this.$route.params.id)
    this.instrumentoService = new InstrumentoService()
    this.instrumentoService.getOne(this.$route.params.id).then(data =>{
    this.instrumento = data.data
    })
  },
  mounted(){
    console.log('se ejecuta Mounted')

  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.instrumentoService.update(this.instrumento).then(data => {
        console.log(data)
      })
    },
    asignar(){
      this.instrumento.nombre = this.$route.params.nombre
      this.instrumento.precio = this.$route.params.precio
      this.instrumento.marca= this.$route.params.marca
      this.instrumento.descripcion = this.$route.params.descripcion
      this.instrumento.envioGratis = this.$route.params.envioGratis
      this.instrumento.imagen = this.$route.params.imagen
    },
    onReset (evt) {
    },
    cambiarFoto (e) {
      console.log('se ejecuta cambiarFoto')
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = () => {
        this.instrumento.imagen = reader.result
        console.log(this.imagen)
      }
    }
  }
}
</script>

<style lang=""></style>
