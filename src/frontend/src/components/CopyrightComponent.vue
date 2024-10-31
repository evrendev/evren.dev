<script setup>
import { ref } from "vue"
let currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="copyright">
    <p>&copy; {{ currentYear }} Evren.dev | All rights are reserved</p>
  </div>
</template>
