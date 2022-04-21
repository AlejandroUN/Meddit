using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Meddit_LDCS_ms.Models
{
    public class Comment
    {
        [BsonId]
        public ObjectId CommnetId{ get; set; }
        public int UserId { get; set; }
        public int VideoId { get; set; }
        public DateTime Date { get; set; }
        public string? Description { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }
}
