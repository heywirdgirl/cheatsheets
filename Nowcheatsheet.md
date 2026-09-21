
found the problem. There are two issues causing the Google login to redirect to the wrong URL:

netlify.toml has a SPA-style catch-all redirect (/* → /index.html) that intercepts the /auth/callback route before Next.js can process it, so the OAuth code never gets exchanged for a session.

The redirectTo URL doesn't use NEXT_PUBLIC_SITE_URL — it relies on window.location.origin, which may not be in the Bolt Database Auth allow list, causing Bolt Database to fall back to a wrong default URL.

Let me fix both.


Edited
netlify.toml
Open
Now let me fix the redirectTo to use the configured site URL in production.


Edited
src/features/auth/hooks/use-auth.ts