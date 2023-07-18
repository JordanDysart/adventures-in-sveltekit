<script lang="ts">
    import Footer from './footer.svelte'
    import Header from './header.svelte'

    import '../app.css'
</script>

<div class="layout">
    <Header />
    <main >
        <slot></slot>
    </main>
    <Footer />
</div>

<style>

    .layout {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
        background-color: var(--color-background);
    }

    main { 
        padding-block: var(--size-9);
    }

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

</style>
