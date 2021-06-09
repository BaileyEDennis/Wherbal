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
        WishlistRepository _wishRepo;

        public WishHerbController(WishHerbRepository repo, WishlistRepository wishRepo)
        {
            _repo = repo;
            _wishRepo = wishRepo;
        }

        [HttpPost]
        [Route("{herbId}/{userId}")]
        public IActionResult Add(int herbId, int userId)
        {
            var wishlist = _wishRepo.GetSingleUserWishlist(userId);
            if (wishlist != null)
            {
                _repo.Add(herbId, wishlist.Id);
            }
            else
            {
                var wishListId = _wishRepo.CreateWishlist(userId);
                _repo.Add(herbId, wishListId);
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
