<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script setup>
    const props = defineProps(['mode'])
</script>

<style scoped>
    button {
        color: #fff;
        background-color:  #1bc0e1;
        padding: 8px 15px;
        border: 1px solid  #1bc0e1;
        border-radius: .3rem;
    }
    button:hover {
        color:  #1bc0e1;
        background-color: transparent;
        border: 1px solid  #1bc0e1;
    }
    .reverse {
        color:  #1bc0e1;
        background-color: transparent;
        padding: 8px 15px;
        border: 1px solid  #1bc0e1;
        border-radius: .3rem;
    }
    .reverse:hover {
        color: #fff;
        background-color:  #1bc0e1;
    }
    .notReverse {
        color: #fff;
        background-color:  #1bc0e1;
        padding: 8px 15px;
        border: 1px solid  #1bc0e1;
        border-radius: .3rem;
    }
    .notReverse:hover {
        color: #fff;
        background-color:  #1bc0e1;
        padding: 8px 15px;
        border: 1px solid  #1bc0e1;
        border-radius: .3rem;
    }
    .plain {
        color: black;
        background-color: transparent;
        padding: 0;
        border: none;
    }
    .plain:hover {
        color:#1bc0e1;
        background-color: transparent;
        padding: 0;
        border: none;
    }
    .plain_reverse {
        color:#1bc0e1;
        background-color: transparent;
        padding: 0;
        border: none;
    }
    .plain_reverse:hover {
        color: black;
        background-color: transparent;
        padding: 0;
        border: none;
    }
</style>