// src/lib/navigation.ts
export function isRouteActive(
  itemHref: string,
  currentPathName: string,
  exact: boolean = false
): boolean {
  // 1. Separate path from hash for both Href and Current URL
  const [hrefPath, hrefHash] = itemHref.split('?')[0].split('#');
  const [currentPath, currentHash] = currentPathName.split('?')[0].split('#');

  const cleanCurrentPath = currentPath.replace(/\/$/, '') || '/';
  const cleanHrefPath = hrefPath.replace(/\/$/, '') || '/';

  // 2. If the menu link includes a #hash (e.g., /services#dredging)
  if (hrefHash) {
    // Both path and hash MUST match
    return cleanCurrentPath === cleanHrefPath && currentHash === hrefHash;
  }

  // 3. Normal root path check
  if (cleanHrefPath === '/') {
    return cleanCurrentPath === '/';
  }

  // 4. Exact path match check (for pages without hashes)
  if (exact) {
    // If the link has no hash, but current URL has a hash, 
    // you can decide if the main page link should stay active.
    return cleanCurrentPath === cleanHrefPath;
  }

  // 5. Ancestor/Parent check
  return cleanCurrentPath === cleanHrefPath || cleanCurrentPath.startsWith(`${cleanHrefPath}/`);
}