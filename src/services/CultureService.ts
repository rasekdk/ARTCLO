import type { PostCollection } from '~/types/Collection';

export default class CultureService {
  static filterItems(items: PostCollection, category: string) {
    return items.filter((item) => {
      const [postCategory] = item.slug.split('/');

      if (category) {
        return postCategory === category;
      }

      return true;
    });
  }

  static sortItems(items: PostCollection) {
    return items.sort((a, b) => {
      const [dayA, monthA, yearA] = a.data.date.split('-').map(Number);
      const [dayB, monthB, yearB] = b.data.date.split('-').map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA.getTime() - dateB.getTime();
    });
  }

  static getItems(items: PostCollection, category?: string) {
    let formatedItemms = [];

    formatedItemms = CultureService.sortItems(items);

    if (category) {
      formatedItemms = CultureService.filterItems(formatedItemms, category);
    }

    return formatedItemms;
  }
}
