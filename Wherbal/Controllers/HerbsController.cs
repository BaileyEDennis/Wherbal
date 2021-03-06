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
    public class HerbsController : ControllerBase
    {
        HerbRepository _repo;
            
        public HerbsController(HerbRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllHerbs()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var herb = _repo.Get(id);
            if (herb == null)
            {
                return NotFound("This herb does not exist :(");
            }
            return Ok(herb);
        }

        [HttpGet("search/{term}")]
        public IActionResult Search(string term)
        {
            var results = _repo.Search(term);
            return Ok(results);
        }

        [HttpPost]
        public IActionResult Add(Herb herb)
        {
            _repo.Add(herb);
            return Created($"api/Herbs/{herb.Id}", herb);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Herb herb)
        {
            _repo.Update(herb);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
    }
}
