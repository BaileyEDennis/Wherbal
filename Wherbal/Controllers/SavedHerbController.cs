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
    [Route("api/Saved_Herbs")]
    public class SavedHerbController : ControllerBase
    {
        SavedHerbRepository _repo;
        SavedlistRepository _savedRepo;

        public SavedHerbController(SavedHerbRepository repo, SavedlistRepository savedRepo)
        {
            _repo = repo;
            _savedRepo = savedRepo;
        }

        [HttpPost]
        [Route("{herbId}/{userId}")]
        public IActionResult Add(int herbId, int userId)
        {
            var savedlist = _savedRepo.GetSingleUserSavedlist(userId);
            if (savedlist != null)
            {
                _repo.Add(herbId, savedlist.Id);
            }
            else
            {
                var savedListId = _savedRepo.CreateSavedlist(userId);
                _repo.Add(herbId, savedListId);
            }
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
