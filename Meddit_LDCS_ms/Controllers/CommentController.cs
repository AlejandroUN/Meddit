using Meddit_LDCS_ms.Models;
using Meddit_LDCS_ms.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Meddit_LDCS_ms.Controllers
{   [Route("api/[controller]")]
    [ApiController]
    public class CommentController : Controller
    {
        private ICommentCollection db = new CommentCollection();

        [HttpGet]
        public async Task<IActionResult> GetAllComments()
        {
            return Ok(await db.GetAllComments());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommentDetails(int id)
        {
            return Ok(await db.GetCommentsByVideo(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateComment([FromBody] Comment comment)
        {
            if (comment == null)
                return BadRequest();

            if (comment.Description == string.Empty)
            {
                ModelState.AddModelError("Name", "The comment shouldn't be empty");
            }

            await db.InsertComments(comment);

            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateComment([FromBody] Comment comment, string id)
        {
            if (comment == null)
                return BadRequest();

            if (comment.Description == string.Empty)
            {
                ModelState.AddModelError("Name", "The commentShouldn't be empty");
            }

            comment.CommnetId =new MongoDB.Bson.ObjectId(id);
            await db.UpdateComments(comment);

            return Created("Created", true);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(string id)
        {
            await db.DeleteComments(id);

            return NoContent(); //Success 
        }
    }
}
