<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["update:page"]);

const pages = Math.ceil(props.total / props.limit);

const firstPage = () => {
  emits("update:page", 1);
};

const prevPage = () => {
  if (props.page > 1) {
    emits("update:page", +props.page - 1);
  }
};

const nextPage = () => {
  if (props.page < pages) {
    emits("update:page", +props.page + 1);
  }
};

const lastPage = () => {
  emits("update:page", pages);
};
</script>

<template>
  <div class="join">
    <button class="join-item btn" :disabled="page == 1" @click="firstPage">«</button>
    <button class="join-item btn" :disabled="page == 1" @click="prevPage">&lt;</button>
    <div class="join-item btn cursor-default ">Page {{ page }} / {{ pages }}</div>
    <button class="join-item btn" :disabled="pages <= page" @click="nextPage">&gt;</button>
    <button class="join-item btn" :disabled="pages <= page" @click="lastPage">»</button>
  </div>
</template>