import { IPaginationViewItem } from './pagination-settings.component';

export const PAGINATION_SETTINGS_VALUES: IPaginationViewItem[] = [
    {
        type: 'page',
        title: 'Постраничная',
        viewSrc: '/assets/page-view.svg',
        isActive: true,
    },
    {
        type: 'load',
        title: 'По кнопке',
        viewSrc: '/assets/load-view.svg',
        isActive: false
    },
]