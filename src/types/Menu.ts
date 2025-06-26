export interface MenuItem {
  id: string;
  label: string;
  url: string;
}

export interface Menu {
  items: MenuItem[];
  type: 'default' | 'burger'
}

