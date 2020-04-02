import herolist from './herolist.json';


export default {
  '/api/web201605/js/herolist.json': herolist,
  'POST /api1/herodetails.json': (req, res) => {
    console.log(req)
    const { ename } = req.body;
    const hero = herolist.filter(item => item.ename === parseInt(ename, 10))[0];
    res.send(hero);
  },
};
