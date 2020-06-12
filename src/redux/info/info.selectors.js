import { createSelector } from 'reselect';

const selectInfo = (state) => state.info;

export const selectNews = createSelector([selectInfo], ({ news }) => news);

export const selectRates = createSelector([selectInfo], ({ rates }) => rates);

export const selectWeaher = createSelector(
  [selectInfo],
  ({ weather }) => weather
);
