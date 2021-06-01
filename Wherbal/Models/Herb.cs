using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wherbal.Models
{
    public class Herb
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Latin_Name { get; set; }
        public string Description { get; set; }
        public string Seed_Start { get; set; }
        public string Moisture { get; set; }
        public string Sun { get; set; }
        public string Soil_Ph { get; set; }
        public string Herb_Spacing { get; set; }
        public string Zone { get; set; }
        public string See_More { get; set; }
        public int Variants_Id { get; set; }
        public string Image_Url { get; set; }
    }
}
