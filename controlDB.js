const ServicePg = require("./postgres");


let validateFields = field => {
  if (!field) {
    throw { ok: false, message: "Campo requerido" };
  }else if (!field.name) {
    throw { ok: false, message: "el nombre es obligatorio" };
  }else if (!field.url) {
    throw { ok: false, message: "la url es obligatoria" };
  }
};


let savePage = async (page) => {
  let _service = new ServicePg();
  let sql = `INSERT INTO public.pages(name, url, description) VALUES (
            '${page.name}',
            '${page.url}',
            '${page.description}');`;
  let res = await _service.executeSQL(sql);
  return res;
};

let queryPages = async (page) => {
  let _service = new ServicePg();
  let sql = `SELECT id,name,url,description FROM public.pages`; 
  let res = await _service.executeSQL(sql);
  return res;
};

module.exports = { validateFields, savePage,queryPages };
