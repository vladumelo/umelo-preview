(() => {
  'use strict';
  const root = new URL('./', document.baseURI);
  const snapshotUrl = new URL('assets/project-feed/feed.json', root);
  const imageRoot = new URL('assets/project-feed/media/', root);

  async function readSnapshot() {
    const response = await fetch(snapshotUrl.href, {
      cache: 'no-cache', signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) throw new Error('Local feed: HTTP ' + response.status);
    const snapshot = await response.json();
    if (snapshot.version !== 1 || !Array.isArray(snapshot.items)) {
      throw new Error('Local feed snapshot is invalid.');
    }
    // Only images exported into this site's media directory are accepted.
    const items = snapshot.items.map(item => {
      if (!item || typeof item.imageUrl !== 'string') throw new Error('Invalid local feed item.');
      const url = new URL(item.imageUrl, root);
      if (url.origin !== imageRoot.origin || !url.pathname.startsWith(imageRoot.pathname)) {
        throw new Error('Image must be inside assets/project-feed/media/.');
      }
      return {...item, imageUrl:url.href};
    });
    window.__UMELO_PROJECT_FEED_SOURCE__ = {
      mode:'local', count:items.length, generatedAt:snapshot.generatedAt,
    };
    return items;
  }

  window.__UMELO_PROJECT_MEDIA_PROMISE__ = readSnapshot()
    .then(items => {
      window.__UMELO_PROJECT_MEDIA__ = items;
      return items;
    });
  // home.js normally observes the promise within the same page load.
  window.__UMELO_PROJECT_MEDIA_PROMISE__.catch(() => {});
})();
