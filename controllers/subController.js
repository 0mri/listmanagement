var Sub = require('../models/sub');
module.exports = {
  getSub: (req, res, next) => {
   Sub.find({},(err, subs) => {
        res.json(subs);
    });
  },
  addSub: (req, res, next) => {
    const sub = new Sub({
        email: req.body.email,
        src: 'hi',
        status: true
    });
    
    sub.save((err, newSub) => {
        if(err) res.json(err);
        res.json(newSub);
    });
   },
   delSub: (req, res, next) => {
    Sub.deleteOne({ email: req.body.email }, (err,del) => {
        if(err) res.json(err);
        res.json(!(del.deletedCount == 0));
    });
   }
}