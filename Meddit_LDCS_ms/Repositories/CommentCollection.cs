using Meddit_LDCS_ms.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Meddit_LDCS_ms.Repositories
{
    public class CommentCollection : ICommentCollection
    {
        internal MongoDBRepository _repository = new MongoDBRepository();
        private IMongoCollection<Comment> Collection;
        
        public CommentCollection()
        {
            Collection = _repository.db.GetCollection<Comment>("Comments");
        }

        public async Task DeleteComments(string id)
        {
            var filter = Builders<Comment>.Filter.Eq(s => s.CommnetId, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Comment>> GetAllComments()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Comment> GetCommentsById(string id)
        {
            return await Collection.FindAsync(
                new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task<List<Comment>> GetCommentsByVideo(int videoId)
        {
            return await Collection.FindAsync(
                new BsonDocument { { "VideoId", videoId} }).Result.ToListAsync();
        }

        public async Task InsertComments(Comment comment)
        {
            await Collection.InsertOneAsync(comment);
        }

        public async Task UpdateComments(Comment comment)
        {
            var filter = Builders<Comment>
                .Filter
                .Eq(s => s.CommnetId, comment.CommnetId);

            await Collection.ReplaceOneAsync(filter, comment);
        }
    }
}