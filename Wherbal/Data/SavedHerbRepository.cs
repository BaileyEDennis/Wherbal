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
    public class SavedHerbRepository
    {
        readonly string ConnectionString;

        public SavedHerbRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }


        public void Add(int herbId, int savedlist_Id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [dbo].[Saved_Herb]
                               ([Herb_Id]
                               ,[Savedlist_Id])
                         OUTPUT inserted.Id
                         VALUES (@Herb_Id, @Savedlist_Id)";
            var id = db.ExecuteScalar<int>(sql, new { Herb_Id = herbId, Savedlist_Id = savedlist_Id });

        }

        public void Delete(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"DELETE FROM Saved_Herb
                        WHERE Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
