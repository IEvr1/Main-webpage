# NexAIpla crawler policy

## Public / indexable

Marketing pages, product landings, and `/en/articles/*` + `/el/articles/*` are public static HTML.

## Training vs discovery

- Discovery crawlers: allow (inherited from `User-agent: *`).
- GPTBot (training): disallow via `public/robots.txt`.

Cross-product policy: AuthoringTool `docs/seo-crawler-policy.md`.
