import PouchDB from 'pouchdb';

const db = new PouchDB('txtReader');

// 清除数据库
const clearDB = () => {
  return new Promise((resolve, reject) => {
    db.destroy()
      .then(res => {
        console.log('清除数据库', res);
        resolve(res);
      })
      .catch(function(err) {
        console.log(err);
        reject(err);
      });
  });
};

// 增加数据
const setData = params => {
  return new Promise((resolve, reject) => {
    db.post(params)
      .then(res => {
        console.log('新增数据', res);
        resolve(res.id);
      })
      .catch(function(err) {
        console.log(err);
        reject(err);
      });
  });
};

// 获取数据
const getData = params => {
  return new Promise((resolve, reject) => {
    db.get(params)
      .then(res => {
        console.log('查询数据', res);
        resolve(res);
      })
      .catch(function(err) {
        console.log(err);
        reject(err);
      });
  });
};

// 删除数据
const deleteData = params => {
  return new Promise((resolve, reject) => {
    db.get(params)
      .then(function(doc) {
        return db.remove(doc);
      })
      .then(res => {
        console.log('删除数据', res);
        resolve(res);
      })
      .catch(function(err) {
        console.log(err);
        reject(err);
      });
  });
};

export default {
  clearDB,
  setData,
  getData,
  deleteData,
};
