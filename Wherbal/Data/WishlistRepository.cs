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
    public class WishlistRepository
    {
        readonly string ConnectionString;

        public WishlistRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }

        public List<Herb> GetUserWishlist(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT H.* FROM Wish_Herb WH
		                         JOIN Herbs H
		                         ON H.Id = WH.Herb_Id
		                         JOIN Wishlist W
		                         ON WH.Wishlist_Id = W.Id
		                         WHERE W.[User_Id] = @id";
            var herb = db.Query<Herb>(sql, new { id = id }).ToList();
            return herb;
        }

        public Wishlist GetSingleUserWishlist(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"SELECT * from Wishlist
                        WHERE Wishlist.[User_Id] = @userId";
            var wishlist = db.QueryFirstOrDefault<Wishlist>(sql, new { userId = userId });
            return wishlist;
        }

        public int CreateWishlist(int userId)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [dbo].[Wishlist]
                            ([user_Id])
                        OUTPUT inserted.Id
                        VALUES (@user_Id)";
            var wishlistId = db.ExecuteScalar<int>(sql, new { user_Id = userId });
            return wishlistId;
        }
    }
}
