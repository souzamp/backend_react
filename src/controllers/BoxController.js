const Box = require("../models/Box");

class BoxController {
/*    async store (req, res) {
        try {
            //await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
            const box = await Box.create({ title: req.body.title });

            return res.json(box); 
        } catch(e) {
          console.log('Error caught' + e);
        }
      }
*/
     async store (req, res) {
        const box = await Box.create({ title: req.body.title });

        return res.json(box);
    }

    async show(req, res){
      const box = await Box.findById(req.params.id).populate({
        path: 'files',
        options: { sort: { createAt: -1}}
      });

      return res.json(box);
    }
}

module.exports = new BoxController();