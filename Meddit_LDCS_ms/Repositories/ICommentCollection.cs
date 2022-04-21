using Meddit_LDCS_ms.Models;

namespace Meddit_LDCS_ms.Repositories
{
    public interface ICommentCollection
    {
        Task InsertComments(Comment comment);
        Task UpdateComments(Comment comment);
        Task DeleteComments(string id);
        Task<List<Comment>> GetAllComments();
        Task<List<Comment>> GetCommentsByVideo(int videoId);
        Task<Comment> GetCommentsById(string id);
    }
}
