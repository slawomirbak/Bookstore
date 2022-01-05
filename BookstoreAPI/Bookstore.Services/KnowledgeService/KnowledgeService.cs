using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Bookstore.DataLogic.Entities;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services.KnowledgeService
{
    public class KnowledgeService : BaseService, IKnowledgeService
    {
        const int PercentageOfPassingTest = 80;

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

        public async Task<BasePlainResponse> LikeTest(LikeDto likeDto, string userEmail)
        {
            var like = _mapper.Map<Like>(likeDto);
            var test = await _unitOfWork.bookRepository.GetTest(like.TestId);
            var user = await _unitOfWork.userRepository.GetByEmail(userEmail);

            if(user.Id != like.UserId || test == null)
            {
                var response = new BasePlainResponse();
                response.IsSuccessful = false;

                return response;
            }

            var voted = test.Likes.ToList().Find(like => like.UserId == user.Id);

            if (voted == null)
            {
                like.CreateDate = DateTime.Now;
                test.Likes.Add(like);
            }
            else
            {
                voted.IsLike = like.IsLike;
                voted.CreateDate = DateTime.Now;
            }

            await _unitOfWork.Save();

            return new BasePlainResponse();
        }

        public async Task<ItemPlainResponse<TestResultDto>> CheckTest(TestDto testDto, string userEmail)
        {
            var test = await _unitOfWork.bookRepository.GetTest(testDto.Id);

            if (test == null)
            {
                var response = new ItemPlainResponse<TestResultDto>(new TestResultDto());
                response.ErrorMessage = "Test doesn't exist";
                response.IsSuccessful = false;

                return response;
            }

            var testResult = new TestResultDto();

            test.Questions.ToList().ForEach(qustion =>
            {
                var userQuestion = testDto?.Questions?.FirstOrDefault(userQustion => userQustion.Id == qustion.Id);
                if (userQuestion == null)
                {
                    return;
                }

                if (qustion.Answer == userQuestion.Answer)
                {
                    testResult.GoodAnswers++;
                }
            });

            testResult.TotalQuestions = test.Questions.ToList().Count;
            testResult.Passed = (((testResult.GoodAnswers / testResult.TotalQuestions) * 100)>= PercentageOfPassingTest);

            if (testResult.Passed)
            {
                await _unitOfWork.userRepository.ReadBook(userEmail, test.Book.Id);
            }

            return new ItemPlainResponse<TestResultDto>(testResult);
        }
    }
}
