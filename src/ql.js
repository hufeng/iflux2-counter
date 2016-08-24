import { QL } from 'iflux2'
window.QL = QL

export const countQL = QL('countQL', [
  'count',
  (count) => `QL:${count}`
]);
