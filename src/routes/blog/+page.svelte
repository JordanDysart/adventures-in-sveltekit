<script>
    import { formatDate } from '$lib/utils';
    import * as config from '$lib/config';
    export let data;
</script>

<svelte:head>
    <title> blog | {config.title} </title>
</svelte:head>

<section class="container">
    <h1>Blueprints</h1>
    <ul class="posts">
        {#each data.posts as post}
        <li class="row post">
            <a href="/blog/{post.slug}">
                <h4 class="title">{post.title}</h4>
            </a>
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
        </li>
        {/each}
    </ul>
</section>


<style>
    .posts {
        display: grid;
        gap: 2rem;
        list-style: none;
    }

    .post {
        max-inline-size: var(--size-30);
    }

    .post:not(:last-child) {
            border-bottom: 1px solid var(--border);
            padding-bottom: var(--size-7);
    }

    .title {
            text-transform: capitalize;
    }

    .date {
            color: var(--text-2);
    }

    .description {
            margin-top: var(--size-3);
    }
</style>

