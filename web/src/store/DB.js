import PouchDB from 'pouchdb';

const db = new PouchDB('txtReader');

// 清除数据库
const clear = () => {
  return new Promise((resolve, reject) => {
    db.destroy()
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

// 修改数据
const updated = (id, params) => {
  return new Promise((resolve, reject) => {
    db.get(id)
      .then(function(doc) {
        console.log(doc);
        doc.mark = params.mark;
        return db.put({
          ...doc,
        });
      })
      .then(res => {
        resolve(res.id);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

// 新增数据
const add = params => {
  return new Promise((resolve, reject) => {
    db.post(params)
      .then(res => {
        resolve(res.id);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

// 获取数据
const get = params => {
  return new Promise((resolve, reject) => {
    db.get(params)
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

// 删除数据
const remove = params => {
  return new Promise((resolve, reject) => {
    db.get(params)
      .then(function(doc) {
        return db.remove(doc._id, doc._rev);
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

// 所有数据
const all = () => {
  return new Promise((resolve, reject) => {
    db.allDocs({
      include_docs: true,
      attachments: true,
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export default {
  clear,
  add,
  updated,
  get,
  remove,
  all,
};
