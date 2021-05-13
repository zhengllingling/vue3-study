<template>
  <div class="home">
    <span>{{count}}</span>
    <button @click="add()">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCount from "./useCount";
export default defineComponent({
  name: "home",
  setup(){
    const { count , add } = useCount();

    return { count, add }
  }
})
</script>
