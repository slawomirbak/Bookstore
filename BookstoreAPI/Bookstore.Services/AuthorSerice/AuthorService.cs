using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IService;
using Bookstore.Abstract.Responses;
using Bookstore.DataLogic.Entities;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookstore.Services.AuthorSerice
{
    public class AuthorService : BaseService, IAuthorService
    {
        public AuthorService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public async Task<ItemPlainResponse<AuthorDto>> GetById(int itemID)
        {
            Author author = await _unitOfWork.authorRepository.GetById(itemID);
            return new ItemPlainResponse<AuthorDto>(_mapper.Map<AuthorDto>(author));
        }

        public async Task<ItemPlainResponse<AuthorDto>> EditProperty(int itemId, string propertyName, string propertyValue)
        {
            Author author = await _unitOfWork.authorRepository.GetById(itemId);
            author.GetType().GetProperty(propertyName).SetValue(author, propertyValue);

            return await Edit(author);
        }

        public async Task<ItemPlainResponse<AuthorDto>> Add(AuthorDto authorDto)
        {
             
            Author author = _mapper.Map<Author>(authorDto);
            await _unitOfWork.authorRepository.Create(author);
            await _unitOfWork.Save();

            return new ItemPlainResponse<AuthorDto>(_mapper.Map<AuthorDto>(author));
        }

        public async Task<ItemPlainResponse<AuthorDto>> Edit(AuthorDto authorDto)
        {
            Author author = _mapper.Map<Author>(authorDto);
            _unitOfWork.authorRepository.Edit(author);
            await _unitOfWork.Save();

            return new ItemPlainResponse<AuthorDto>(_mapper.Map<AuthorDto>(author));
        }

        public async Task<ItemPlainResponse<AuthorDto>> Edit(Author author)
        {
            _unitOfWork.authorRepository.Edit(author);
            await _unitOfWork.Save();

            return new ItemPlainResponse<AuthorDto>(_mapper.Map<AuthorDto>(author));
        }

        public async Task<ItemPlainResponse<List<AuthorDto>>> GetList()
        {
            var authorList =  await _unitOfWork.authorRepository.GetAll();
            var authorListDto = _mapper.Map<List<AuthorDto>>(authorList);
            var reposne = new ItemPlainResponse<List<AuthorDto>>(authorListDto);

            return reposne;
        }
    }
}
