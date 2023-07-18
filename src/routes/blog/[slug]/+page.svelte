<script lang="ts">
    import type { PageData } from "./$types";
    import { formatDate } from '$lib/utils';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta name="og:type" content="article" />
    <meta name="og:title" content={data.meta.title} />
</svelte:head>


<article class="container">
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>
    <svelte:component this={data.content} />
</article>

