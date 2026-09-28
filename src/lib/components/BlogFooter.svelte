<script lang="ts">
  interface Props {
    backHref: string;
    backLabel: string;
  }
  let { backHref, backLabel }: Props = $props();
</script>

<footer class="foot">
  <div class="section-inner foot-inner">
    <a href={backHref}>{backLabel}</a>
    <span>© 2026 Jade Jabagat Angco</span>
  </div>
</footer>

<style>
  .foot {
    border-top: 1px solid var(--border);
    padding: 1.5rem;
    background: var(--surface);
  }
  .foot-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem;
    font-size: 0.8rem;
    color: var(--ink-soft);
  }
  .foot-inner a:first-child {
    font-weight: 700;
    color: var(--ink);
  }
  .foot-inner a:first-child:hover {
    color: var(--primary);
  }
</style>
