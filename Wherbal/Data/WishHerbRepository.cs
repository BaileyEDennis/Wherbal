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
    public class WishHerbRepository
    {
        readonly string ConnectionString;

        public WishHerbRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }

        public List<Herb> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"Select * from Wish_Herb WH
                            JOIN Herbs H
                            ON H.Id = WH.Herb_Id";
            return db.Query<Herb>(sql).ToList();
        }

        public Herb Get(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * FROM Wish_Herb WH
                                 JOIN Herbs H
                                 ON H.Id = WH.Herb_Id
                        WHERE WH.id = @id";
            var herb = db.QueryFirstOrDefault<Herb>(sql, new { id = id });
            return herb;
        }

        public void Add(Herb herb)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [dbo].[Wish_Herb]
                               ([Herb_Id]
                               ,[Wishlist_Id)
                         OUTPUT inserted.Id
                         VALUES (@Herb_Id, @Wishlist_Id)";
            var id = db.ExecuteScalar<int>(sql, herb);
        }

        public void Delete(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"DELETE FROM Wish_Herb
                        WHERE Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
