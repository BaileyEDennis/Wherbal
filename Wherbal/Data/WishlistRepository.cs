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

        public List<Herb> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"Select * from Herbs H
                            Join Wish_Herb WH
                            ON H.Id = WH.Herb_Id
                            Join Wishlist W
                            ON WH.Wishlist_Id = W.Id
                            Join Users U
                            ON W.[User_Id] = U.Id";
            return db.Query<Herb>(sql).ToList();
        }
    }
}
