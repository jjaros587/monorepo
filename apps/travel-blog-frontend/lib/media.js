import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  let url;
  if ('url' in media) {
    url = media.url;
  } else {
    url = media.data.attributes.url;
  }
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getStrapiMediaArrayItem(media) {
  const { url } = media.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}
