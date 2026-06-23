import type { ImageMetadata } from 'astro';

export const findImage = async (
  src: string | ImageMetadata | null | undefined
): Promise<string | ImageMetadata | null | undefined> => {
  if (!src) return src;
  if (typeof src !== 'string') return src;
  // Remote URLs are returned as-is
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  // For local paths, try to resolve through import
  try {
    const image = await import(/* @vite-ignore */ `~/assets/${src.replace('~/assets/', '')}`);
    return image?.default || src;
  } catch {
    return src;
  }
};

export const adaptOpenGraphImages = async (
  openGraph: { images?: Array<{ url: string; width?: number; height?: number } | string> },
  site: URL | undefined
) => {
  if (!openGraph.images || openGraph.images.length === 0) {
    return openGraph;
  }

  const images = await Promise.all(
    openGraph.images.map(async (image) => {
      if (typeof image === 'string') {
        return { url: image };
      }
      return image;
    })
  );

  return { ...openGraph, images };
};
