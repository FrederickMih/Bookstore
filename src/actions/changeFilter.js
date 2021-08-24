import * as myConst from '../constants';

const changeFilter = (filter) => ({
  type: myConst.CHANGE_FILTER,
  payload: filter,
});

export default changeFilter;
