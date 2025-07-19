export default class ImageService {
  static parseImageList(md: string) {
    const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
    const results = [];
    let match;

    while ((match = regex.exec(md)) !== null) {
      const alt = match[0];
      const url = match[1];
      const segments = url.replace(/\/+$|\?.*$/g, '').split('/');
      let slug = segments.pop() || '';
      slug = slug.replace(/\.[^/.]+$/, '');

      results.push({ url, slug, alt });
    }

    return results;
  }
}
