using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;
using Wherbal.Models;

namespace Wherbal.Data
{
    public class SavedlistRepository
    {
        readonly string ConnectionString;

        public SavedlistRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }

        public List<Herb> GetUserSavedlist(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT H.* FROM Saved_Herb SH
		                         JOIN Herbs H
		                         ON H.Id = SH.Herb_Id
		                         JOIN Savedlist S
		                         ON SH.Savedlist_Id = S.Id
		                         WHERE S.[User_Id] = @id";
            var herb = db.Query<Herb>(sql, new { id = id }).ToList();
            return herb;
        }

        public Savedlist GetSingleUserSavedlist(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * from Savedlist
                        WHERE Savedlist.[User_Id] = @userId";
            var savedlist = db.QueryFirstOrDefault<Savedlist>(sql, new { userId = userId });
            return savedlist;
        }

        public int CreateSavedlist(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [dbo].[Savedlist]
                            ([user_Id])
                        OUTPUT inserted.Id
                        VALUES (@user_Id)";
            var savedlistId = db.ExecuteScalar<int>(sql, new { user_Id = userId });
            return savedlistId;
        }
    }
}
