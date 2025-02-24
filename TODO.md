# TODOs

- Fix the CSP so it doesn't require `unsafe-inline`
	- This is used by various joy UI scripts
	- We need to use a nonce to fix this
	- https://mui.com/material-ui/guides/content-security-policy/
	- https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
	- https://github.com/vercel/next.js/tree/canary/examples/with-strict-csp
- Look into Core Web Vitals https://github.com/vercel/next.js/tree/canary/examples/with-strict-csp
	- Not sure how necessary this is with the lighthouse plugin
- Check out the [`bundle-analyzer`](https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling) plugin
- Make more character speech bubbles
	- Frog
	- Cicada
- Notifying people about posts
	- Add a mailing list
	- Add a link to the mailing list (footer? app bar?)
- Add a page for notable projects
- Fix hydration error on the RED post
