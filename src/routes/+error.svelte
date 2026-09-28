<svelte:head>
  <title>Page not found — Jade Angco</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main id="main">
  <section class="section">
    <div class="section-inner error-wrap">
      <p class="status-row">
        <span class="status-sep" aria-hidden="true">/</span>
        <span>Error 404</span>
      </p>
      <h1 class="hero-title">
        This page wandered off<span class="dot">.</span>
      </h1>
      <p class="lede">
        The link you followed doesn’t exist — but the good stuff does. Pick
        a section below.
      </p>
      <nav class="error-nav" aria-label="Site sections">
        <a class="btn btn-primary btn-sm" href="/">Back home</a>
        <a class="btn btn-ghost btn-sm" href="/#projects">Projects</a>
        <a class="btn btn-ghost btn-sm" href="/#live-sites">Live sites</a>
        <a class="btn btn-ghost btn-sm" href="/#contact">Contact</a>
      </nav>
    </div>
  </section>
</main>

<style>
  .error-wrap {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .error-nav {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
</style>
