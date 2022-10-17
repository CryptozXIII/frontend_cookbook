<template>
  <button :class="{ like: liked }" class="liked btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  liked: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.btn:hover {
  color: #fee440;
  background-color: #11ffee00;
}
.btn:active {
  color: #001219;
  background-color: #11ffee00;
}

.btn {
  background-color: #11ffee00;
  border: 0px;
}

.like {
  color: #e31b23;
}
</style>
