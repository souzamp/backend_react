const Box = require("../models/Box");
const File = require("../models/File");

class FileController {
  async store (req, res) {
    //cria arquivo
    //console.log(req.file);
    //return res.send('OK');
    const boxe = await Box.findById(req.params.id);
    //const boxe = await Box.findById(req.params.id);
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });
    console.log(file);
    console.log(boxe);
    boxe.files.push(file);

    await boxe.save();

    req.io.sockets.in(boxe._id).emit('file');
    
    return res.json(file);
   }
}

module.exports = new FileController();