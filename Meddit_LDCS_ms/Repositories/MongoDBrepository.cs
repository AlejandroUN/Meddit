using MongoDB.Driver;

namespace Meddit_LDCS_ms.Repositories
{
    public class MongoDBRepository
    {
        public MongoClient client;

        public IMongoDatabase db;

        public MongoDBRepository()
        {
            client = new MongoClient("mongodb+srv://admin:1234@cluster0.qdboa.mongodb.net/test");//mongodb://127.0.0.1:27017

            db = client.GetDatabase("Meedit_LDCS_db");
        }
    }
}
