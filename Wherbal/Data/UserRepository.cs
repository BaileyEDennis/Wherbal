using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using Wherbal.Models;

namespace Wherbal.Data
{
    public class UserRepository
    {
        readonly string ConnectionString;

        public UserRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }

        public List<User> GetAllUsers()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Users";
            return db.Query<User>(sql).ToList();

        }

        public User GetUser(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT *
                        FROM Users
                        WHERE Id = @id";
            var user = db.QueryFirstOrDefault<User>(sql, new { id = id });
            return user;
        }

        public User GetUserByFirebaseUid(string firebase_Uid)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * 
                        FROM Users 
                        WHERE Firebase_Uid = @firebase_Uid";
            var user = db.QueryFirstOrDefault<User>(sql, new { firebase_Uid = firebase_Uid });
            return user;
        }

        public void AddUser(User user)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"INSERT INTO [Users]
	                        ([Display_Name],
	                        [Image_Url],
                            [Firebase_Uid])
                        VALUES 
	                        (@Display_Name,
	                        @Image_Url,
                            @Firebase_Uid)";
            var id = db.ExecuteScalar<int>(sql, user);
            user.Id = id;
        }

        public void UpdateUser(User user)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE [Users]
                        SET Display_Name = @Display_Name,
                            Image_Url = @Image_Url,
                            Firebase_Uid = @Firebase_Uid
                        WHERE Id = @id";
            db.Execute(sql, user);
        }

        public void DeleteUser(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"DELETE FROM Users
                        WHERE Id = @id";
            db.Execute(sql, new { id = id });
        }

    }
}
