import { Tab } from "../Interface/Tab.interface";

export const HEADERCONST = {
    WORLD_VIEW : 'Global Cases',
    COUNTRY_VIEW : 'Country Wise Cases'
  };

export const TABCONSTANTS: Tab[] = [
  { id: 1, name: HEADERCONST.WORLD_VIEW, selected: true, disabled: false },
  { id: 2, name: HEADERCONST.COUNTRY_VIEW, selected: false, disabled: false },
];

