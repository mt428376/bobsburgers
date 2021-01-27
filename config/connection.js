var mysql = require("mysql");




if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: 'td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
    user:'bmiwmx1rj9wzxa4s'
    password: 'n5dz5k0flo2fzh1f'
    database: 'g0ktoydr92mob75c'

  })

  }

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Goldenrose1.",
  database: "bobsburgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
