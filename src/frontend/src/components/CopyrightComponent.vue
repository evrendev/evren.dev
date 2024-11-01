<script setup>
import { ref } from "vue"
let currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="copyright">
    <p>&copy; {{ currentYear }} evren.dev</p>
  </div>
</template>
