<script>
    
</script>

<header>
    <nav>
        <ul>
            <li>
                <a href="/">
                    Home
                </a>
            </li>
            <li>
                <a href="/about">
                    About
                </a>
            </li>
            <li>
                <a href="/blog">
                    Blog
                </a>
            </li>
        </ul>

    </nav>
</header>

<style>

    header {
        width: 100%;
        padding: 0 var(--size-content-px);
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        z-index: var(--layer-4);
    }

    nav {
        display: flex;
        padding: 0.6rem 2rem;
        flex-basis: auto;
        width: fit-content;
    }
    ul {
        position: relative;
        background-color: #fff;
        align-items: center;
        display: flex;
        height:var(--size-14);
        padding-left: var(--size-2);
    }

    ul {
        border-radius: var(--border-radius);
        border: var(--border-size);
        box-shadow: var(--shadow-very-very-hot);
        padding: 0 var(--size-3);
        white-space: nowrap;
        
    }

    li {
        list-style: none;
    }

    li a {
        text-decoration: none;
        color: #000;
        align-items: center;
        display: inline-flex;
        font-weight: semi-bold;
        height: 100%;
        padding-left: var(--size-4);
        padding-right: var(--size-4);

    }

</style>
