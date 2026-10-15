export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = "https://cuhksz-cross-lab.github.io/wangxin/";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
