<script>
	let { posts = [] } = $props();
</script>

<style>
    .title-row {
        display: flex;
        align-items: center;
        gap: 1.5rem; /* Adjust spacing as needed */
    }

    .title-row h2 {
        margin: 0;
    }

    .post-date {
				font-size: 0.8rem;
        white-space: nowrap;
				align-self: flex-start;
    }
</style>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<div class="title-row">
						<h2>{post.title}</h2>
						<span class="post-date">Published: {post.date}</span>
					</div>
				</a>
			</article>

			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>