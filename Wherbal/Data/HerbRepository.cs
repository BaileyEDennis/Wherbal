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
    public class HerbRepository
    {
        readonly string ConnectionString;

        public HerbRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("Wherbal");
        }
        public List<Herb> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Herbs";
            return db.Query<Herb>(sql).ToList();
        }

        public Herb Get(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = "SELECT * FROM Herbs WHERE Id = @id";
            var herb = db.QueryFirstOrDefault<Herb>(sql, new { id = id });
            return herb;
        }

        public void Add(Herb herb)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"INSERT INTO [Herbs]
                               ([Name]
                               ,[Latin_Name]
                               ,[Description]
                               ,[Seed_Start]
                               ,[Moisture]
                               ,[Sun]
                               ,[Soil_Ph]
                               ,[Herb_Spacing]
                               ,[Zone]
                               ,[See_More]
                               ,[Variants_Id])
                         VALUES (@Name, @Latin_Name, @Description, @Seed_Start, @Moisture, @Sun, @Soil_Ph, @Herb_Spacing, @Zone, @See_More, @Variants_Id)";
            var id = db.ExecuteScalar<int>(sql, herb);
            herb.Id = id;
        }

        public void Update(Herb herb)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"UPDATE Herbs
                        SET Name = @name,
                            Latin_Name = @latin_Name,
                            Description = @description,
                            Seed_Start = @seed_Start,
                            Moisture = @moisture,
                            Sun = @sun,
                            Soil_Ph = soil_Ph,
                            Herb_Spacing = herb_Spacing,
                            Zone = zone,
                            See_More = see_more,
                            Variants_Id = variants_Id,
                        WHERE Id = @id";
            db.Execute(sql, herb);
        }

        public void DeleteHerb(int id)
        {
            using var db = new SqlConnection(ConnectionString);
            var sql = @"DELETE FROM Herbs
                        WHERE Id = @id";
            db.Execute(sql, new { id = id });
        }

        public List<Herb> Search(string term)
        {
            var sql = @"SELECT *
                        FROM Herbs
                        WHERE Name like '%' + @searchTerm + '%'
	                          OR
	                          Description like '%' + @searchTerm + '%'
                              OR
                              Latin_Name like '%' + @searchTerm + '%'";

            using var db = new SqlConnection(ConnectionString);

            return db.Query<Herb>(sql, new { searchTerm = term }).ToList();
        }
    }
}
