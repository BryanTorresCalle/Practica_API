const express = require("express");
const router = express.Router();
const _Controller = require("./control");

router.get("/pages", async (req, res) => {
  let info = await req.body;
  _Controller
    .queryPages(info)
    .then((resDB) => {
      let pages = resDB.rows;
      res.send({ ok: true, info: pages, message: "Consultado" });
    })
    .catch((error) => {
      res.send(error);
    });
});


router.post("/pages", async (req, res) => {
  try {
    
    let info1 = await req.body;

    
    _Controller.validateFields(info1);

  
    _Controller
      .savePage(info1)
      .then((resDB) => {
        res.send({ ok: true, message: "Registro guardado", info: info1 });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
