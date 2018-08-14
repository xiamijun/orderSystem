<template>
    <div>
        <headerComponent></headerComponent>
        <div class="contentArea">
            模板
        </div>
    </div>
</template>

<script>
  import headerComponent from '@/components/header.vue'
  export default {
    components:{
      headerComponent,
    },
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>

<style scoped>
    .contentArea {
        width: 10rem;
        margin: 0.1rem auto;
        padding: 0.2rem;
        box-sizing: border-box;
        min-width: 1024px;
        background: #fff;
        margin-top: 0.8rem;
    }
</style>