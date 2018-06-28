<template>
  <v-container>
    <v-carousel class="elevation-12" style="margin-top:60px">
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {
        items: [
          {
            src: 'https://storage.googleapis.com/happygram/15269851256811526910552890samurai_gundam_papercraft_by_hoangtoon.jpg'
          },
          {
            src: 'https://storage.googleapis.com/happygram/animals-project.jpg'
          },
          {
            src: 'https://storage.googleapis.com/happygram/knight-gundam.jpg'
          }
        ]
      }
    },
    components: {
    }
  }
</script>

