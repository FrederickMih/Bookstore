import * as myConst from '../constants';

const createFilter = (filter) => ({
  type: myConst.CHANGE_FILTER,
  payload: filter,
});

export default createFilter;
