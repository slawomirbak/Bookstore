using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookstore.Abstract.IServices
{
    public interface IKnowledgeService
    {
        Task<BasePlainResponse> CreateTest(TestDto testDto, string userEmail, int bookId);
        Task<ItemsPagingResponse<List<TestDto>>> GetTests(int bookId);
        Task<ItemPlainResponse<TestDto>> GetTest(int testId);
        Task<BasePlainResponse> LikeTest(LikeDto like, string userEmail);
        Task<ItemPlainResponse<TestResultDto>> CheckTest(TestDto testDto, string userEmail);
    }
}
