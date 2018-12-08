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
};
