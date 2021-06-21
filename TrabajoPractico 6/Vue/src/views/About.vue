<template>
    <div>
        <h1 class="text-center my-lg-3">Av. Las Heras y Av. San Martin, Ciudad de Mendoza</h1>
        <div class="container"><donde-estamos/></div>
    </div>
</template>

<script>
import About from '../components/About.vue'
export default{
    components:{
        "donde-estamos": About
    }
}
</script>
