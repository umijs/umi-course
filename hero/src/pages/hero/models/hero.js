import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';
import herolistjson from '../../../../mock/herolist.json';
export default {
  state: {
    heros: [],
    freeheros: [],
    filterKey: 0,
    itemHover: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
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
      const herolist = herolistjson;
      function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0),
          i = arr.length,
          min = i - count,
          temp,
          index;
        while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
        }
        return shuffled.slice(min);
      }
      const freeheros = getRandomArrayElements(herolistjson, 13);
      yield put({
        type: 'save',
        payload: {
          heros: herolist,
          freeheros: freeheros,
        },
      });
    },
  },
};
