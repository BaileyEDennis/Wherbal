using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wherbal.Data;
using Wherbal.Models;

namespace Wherbal.Controllers
{
    [ApiController]
    [Route("api/Herbs")]
    public class HerbsController
    {
        HerbRepository _repo;
            
        public HerbsController(HerbRepository repo)
        {
            _repo = repo;
        }
    }
}
