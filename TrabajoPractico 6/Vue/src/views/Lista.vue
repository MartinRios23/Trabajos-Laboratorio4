<template>
  <div class="home">
    <b-container fluid>
      <b-card-group deck>
        <div
          v-for="instrumento in instrumentosData.data"
          :key="instrumento.id"
          style="margin-top:15px">
        <div>
    <b-card
      tag="article"
      style="max-width: 20rem; min-width: 20rem;"
      class="mb-2">
      <b-card-img
        :src="instrumento.imagen"
        alt="Image"
        style="min-height:200px; max-height:200px">
      </b-card-img>
      <b-card-title :title="instrumento.nombre"></b-card-title>
      <b-card-text>
        <p> {{ instrumento.descripcion }}</p>
        <p> {{ instrumento.precio }}</p>
        <span style="color:red" v-if="instrumento.envioGratis == true ">
        (Envio gratis)
        </span>
      </b-card-text>
      <b-card-body>
          <b-button
          :href="'/formulario/' + instrumento.id"
          variant="primary"
          style="width:100%">
            <b>Editar</b>
        </b-button>
      </b-card-body>
    </b-card>
  </div>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src

import InstrumentoService from '../service/InstrumentoService'

export default {
  name: 'Home',
  components: {
  },
  created () {
    this.instrumentoService = new InstrumentoService()
    this.instrumentoService.getAll().then(data => {
      this.instrumentosData = data
      console.log(this.instrumentosData.data)
    })
  },
  data () {
    return {
      instrumentosData: []
    }
  },
  instrumentoService: null
}
</script>
