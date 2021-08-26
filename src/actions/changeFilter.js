import * as myConst from '../constants';

const changeFilter = (category) => ({
  type: myConst.CHANGE_FILTER,
  category,
});

export default changeFilter;
