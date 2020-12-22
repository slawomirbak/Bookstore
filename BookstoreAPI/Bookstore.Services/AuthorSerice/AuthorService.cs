using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IService;
using Bookstore.Abstract.Responses;
using Bookstore.DataLogic.Entities;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Services.AuthorSerice
{
    public class AuthorService : BaseService, IAuthorService
    {
        public AuthorService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public async Task<ItemPlainResponse<AuthorDto>> Add(AuthorDto authorDto)
        {
             
            Author author = _mapper.Map<Author>(authorDto);
            await _unitOfWork.authorRepository.Create(author);
            await _unitOfWork.Save();
            return new ItemPlainResponse<AuthorDto>(_mapper.Map<AuthorDto>(author));
        }
    }
}
