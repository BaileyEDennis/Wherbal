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
    [Route("api/Wish_Herbs")]
    public class WishHerbController : ControllerBase
    {
        WishHerbRepository _repo;

        public WishHerbController(WishHerbRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public IActionResult Add(Herb herb)
        {
            _repo.Add(herb);
            return Created($"api/Wish_Herbs/{herb.Id}", herb);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
    }
}
