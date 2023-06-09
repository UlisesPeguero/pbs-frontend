const TOOLBAR_ACTIONS = {
  REFRESH: 'refresh',
  FILTER: 'filter',
  SEARCH: 'search',
};

const TOOLBAR_BUTTONS = {
  refresh: {
    id: '_refreshButton',
    classes: 'btn-sm btn-secondary',
    icon: 'ArrowClockwise',
  },
  filter: {
    id: '_filterButton',
    classes: 'btn-sm btn-secondary',
    icon: 'Filter',
  },
};

export { TOOLBAR_BUTTONS, TOOLBAR_ACTIONS };
