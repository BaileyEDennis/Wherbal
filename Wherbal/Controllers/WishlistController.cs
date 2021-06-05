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
    [Route("api/Wishlist")]
    public class WishlistController : ControllerBase
    {
        WishlistRepository _repo;

        public WishlistController(WishlistRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetUserWishlist(int id)
        {
            return Ok(_repo.GetUserWishlist(id));
        }
    }
}
