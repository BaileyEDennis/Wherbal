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
    [Route("api/Savedlist")]
    public class SavedlistController : ControllerBase
    {
        SavedlistRepository _repo;

        public SavedlistController(SavedlistRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        public IActionResult GetUserSavedlist(int id)
        {
            return Ok(_repo.GetUserSavedlist(id));
        }

        [HttpPost]
        public IActionResult CreateSavedlist(int userId)
        {
            return Ok(_repo.CreateSavedlist(userId));
        }
    }
}
