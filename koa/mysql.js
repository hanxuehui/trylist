var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    port:'3306',
    user     : 'root',
    password : '123321',
    database : 'db_1702f'
});

class Mysql {
    query (sql) {
      return new Promise((resolve, reject) => {
        pool.query(sql, function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
        });
      })
       
    }
}

module.exports = new Mysql()
