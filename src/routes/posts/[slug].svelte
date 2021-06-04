<script context="module">
	export async function load({ page }) {
		/* const Hello = (await import(`../../posts/${page.params.slug}.md`)).default; */
		try {
			const Post = await import(`../../posts/${page.params.slug}.md`);
			return {
				props: {
					Post: Post.default
					/* title: Hello.metadata.title */
				}
			};
		} catch (e) {
			console.log('err', e);
			/* return { */
			/* 	status: 307, */
			/* 	redirect: '/posts' */
			/* }; */
			return {
				status: 404,
				error: 'Post not found'
			};
		}
	}
</script>

<script>
	export let Post;
	/* export let title; */
</script>

<Post />
<!--<h2>{title}</h2>-->

<!--<h3>{post.title}</h3>-->
