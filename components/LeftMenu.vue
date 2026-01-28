<template>
  <aside class="bg-[var(--beige)] fixed top-0 left-0 bottom-0 w-[260px] flex flex-col gap-[14px] py-[28px] px-[18px] border-r-[var(--border)] border-solid">
    <div class="text-lg font-bold text-[var(--text)]">Your Name</div>
    <nav class="flex flex-col gap-[6px] mt-[8px]">
      <v-btn @click="">
        Projects
      </v-btn>
      <a class="block py-[10px] px-[12px] rounded-[8px] text-[var(--text)] font-semibold no-underline cursor-pointer" href="#">Overview</a>
      <a class="block py-[10px] px-[12px] rounded-[8px] text-[var(--text)] font-semibold no-underline cursor-pointer" href="#projects">Projects</a>
      <a class="block py-[10px] px-[12px] rounded-[8px] text-[var(--text)] font-semibold no-underline cursor-pointer" href="#notes">Notes</a>
      <a class="block py-[10px] px-[12px] rounded-[8px] text-[var(--text)] font-semibold no-underline cursor-pointer" href="#contact">Contact</a>
    </nav>
    <div class="mt-auto text-[var(--muted-text)] text-xs">© 2026</div>
  </aside>
</template>

<script setup>
// Simple presentational component for the fixed left menu.
</script>

<style scoped>
/* minor scoped tweaks if needed; main styles live in assets/css/style.css */
.left-menu__brand{letter-spacing:-0.4px}
/* .left-menu__item{cursor:pointer} */
</style>
