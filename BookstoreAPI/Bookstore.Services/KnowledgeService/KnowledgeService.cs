using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Bookstore.DataLogic.Entities;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookstore.Services.KnowledgeService
{
    public class KnowledgeService : BaseService, IKnowledgeService
    {
        public KnowledgeService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public async Task<BasePlainResponse> CreateTest(TestDto testDto, string userEmail, int bookId)
        {
            var test = _mapper.Map<Test>(testDto);

            var user = await _unitOfWork.userRepository.GetByEmail(userEmail);
            var book = await _unitOfWork.bookRepository.GetById(bookId);

            test.Book = book;
            test.User = user;
            test.Likes = 0;
            test.Dislike = 0;
            test.CreateDate = DateTime.Now;
            await _unitOfWork.bookRepository.CreateTest(test);

            return new BasePlainResponse();
        }

        public async Task<ItemPlainResponse<TestDto>> GetTest(int testId)
        {
            var test = await _unitOfWork.bookRepository.GetTest(testId);

            var testDto = _mapper.Map<TestDto>(test);
            return new ItemPlainResponse<TestDto>(testDto);
        }

        public async Task<ItemsPagingResponse<List<TestDto>>> GetTests(int bookId) {
            var tests = await _unitOfWork.bookRepository.GetTests(bookId);

            var testsDto = _mapper.Map<List<TestDto>>(tests);
            return new ItemsPagingResponse<List<TestDto>>(testsDto, tests.Count);
        }
    }
}
