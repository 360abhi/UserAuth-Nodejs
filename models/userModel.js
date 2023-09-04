const db = require('../db');

class User {
    static register(username,hashedPassword,callback){
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], callback)
    }
    static findByUsername(username, callback) {
        db.get('SELECT * FROM users WHERE username = ?', [username], callback);
      }
}

module.exports = User;