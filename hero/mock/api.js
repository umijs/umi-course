import herolist from './herolist.json';
import item from './item.json';
import summoner from './summoner.json';
import ming from './ming.json';

export default {
  '/api/herolist.json': herolist,
  'POST /api/herodetails.json': (req, res) => {
    const { ename } = req.body;
    const hero = herolist.filter(item => item.ename === parseInt(ename, 10))[0];
    res.send(hero);
  },
  '/api/item.json': item,
  '/api/summoner.json': summoner,
  '/api/ming.json': ming,
  'POST /api/freeheros.json':(req,res)=>{
    const { number } = req.body;
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
    const freeheros = getRandomArrayElements(herolist, number);
    res.send(freeheros);
  }
};
