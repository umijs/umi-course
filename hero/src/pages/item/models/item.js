import { queryItem } from 'services/api';
import itemjson from '../../../../mock/item.json';
export default {
  state: {
    items: [],
    filterKey: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/item') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const item = itemjson;

      yield put({
        type: 'save',
        payload: {
          items: item,
        },
      });
    },
  },
};
