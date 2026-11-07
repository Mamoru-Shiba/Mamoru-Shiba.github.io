// 検索エンジンに載せてよいページ（パス）の一覧。
// ここに無いページには noindex を付け、サイトマップにも入れない。
// astro.config.mjs と BaseLayout.astro の両方から読むため、.mjs で置いている。
export const INDEXED_PATHS = ["/"];

/** @param {string} pathname */
export function isIndexedPath(pathname) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return INDEXED_PATHS.includes(normalized);
}
