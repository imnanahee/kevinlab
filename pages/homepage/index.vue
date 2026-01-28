<template>
  <div class="flex min-h-screen">
    <main class="ml-[280px] p-[48px] max-w-[1100px] w-full">
      <header class="mb-[28px]">
        <h1 class="text-4xl font-bold text-[var(--text)] mb-[6px]">Test</h1>
        <p class="text-[var(--muted-text)]">A text-first portfolio layout inspired by Notion / Jira — neutral, minimal, and readable.</p>
      </header>

      <section id="about" class="mb-[28px]">
        <h2 class="mb-[10px]">About</h2>
        <div class="bg-[var(--panel)] border border-solid border-[var(--border)] p-[20px] rounded-[12px] shadow-[var(--shadow)] text-[var(--text)]">
          <p>Hello — I'm a developer focused on clear writing and simple interfaces. This portfolio emphasizes content over flashy visuals.</p>
        </div>
      </section>

      <section id="projects" class="mb-[28px]">
        <h2 class="mb-[10px]">Projects</h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[14px]">
          <article class="bg-[var(--panel)] p-[18px] rounded-[10px] border border-solid border-[var(--border)]">
            <h3>Project One</h3>
            <p class="text-[var(--muted-text)]">Short description — goals, role, and technologies.</p>
          </article>
          <article class="bg-[var(--panel)] p-[18px] rounded-[10px] border border-solid border-[var(--border)]">
            <h3>Project Two</h3>
            <p class="text-[var(--muted-text)]">Short description — goals, role, and technologies.</p>
          </article>
        </div>
      </section>

      <section id="notes" class="mb-[28px]">
        <h2 class="mb-[10px]">Notes</h2>
        <div class="bg-transparent text-[var(--muted-text)] p-[12px] border-l-3 border-solid border-[var(--border)] rounded-[6px]">
          <p>Quick notes, ideas, and writing samples live here. Use plain text blocks and headings to structure content.</p>
        </div>
      </section>

      <section id="contact" class="mb-[28px]">
        <h2 class="mb-[10px]">Contact</h2>
        <div class="bg-[var(--panel)] border border-solid border-[var(--border)] p-[20px] rounded-[12px] shadow-[var(--shadow)] text-[var(--text)]">
          <p class="text-[var(--muted-text)]">Email: hello@example.com</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import LeftMenu from '../components/LeftMenu.vue'
</script>

<style>
/* small page-scoped adjustments if desired */
</style>
