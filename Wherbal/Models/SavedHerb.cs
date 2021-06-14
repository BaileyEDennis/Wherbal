using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wherbal.Models
{
    public class SavedHerb
    {
        public int Id { get; set; }
        public int Herb_Id { get; set; }
        public int Savedlist_Id { get; set; }
    }
}
