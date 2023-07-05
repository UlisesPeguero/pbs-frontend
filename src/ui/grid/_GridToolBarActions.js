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
    message: 'Reload data',
  },
  filter: {
    id: '_filterButton',
    classes: 'btn-sm btn-secondary',
    icon: 'Filter',
    message: 'Show all / Show only active',
  },
};

export { TOOLBAR_BUTTONS, TOOLBAR_ACTIONS };
