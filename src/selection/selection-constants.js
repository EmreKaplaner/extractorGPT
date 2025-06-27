// Selection modes - EXACT COPY
export const le = Object.freeze({
  SELECTION: "selection",
  SELECTION_LIST: "selection-list", 
  SELECT_PAGINATION_BUTTON: "select-pagination-button",
  SELECT_PAGE_DEATILS: "select-page-details"  // Note: Original has typo "DEATILS"
});

// Group Finder types - EXACT COPY
export const ce = Object.freeze({
  TYPE_1: "type-1",
  TYPE_2: "type-2"
});

// Website-specific configurations (se array) - EXACT COPY
export const se = [
  {
    website: "apollo.io",
    type: ce.TYPE_1
  },
  {
    website: "drinkersedition.com", 
    type: ce.TYPE_1
  },
  {
    website: "steampowered.com",
    type: ce.TYPE_1
  }
]; 