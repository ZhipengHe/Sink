export default defineAppConfig({
  title: 'zhipe.ng',
  email: 'github@zhipenghe.me',
  github: 'https://github.com/ZhipengHe/sink',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'Powered by Sink. A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://zhipe.ng/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
