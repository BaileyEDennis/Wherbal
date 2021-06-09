using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wherbal.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Display_Name { get; set; }
        public string Image_Url { get; set; }
        public string Firebase_Uid { get; set; }

    }
}
