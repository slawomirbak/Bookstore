using AutoMapper;
using Bookstore.Abstract.IService;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Services.AuthorSerice
{
    public class AuthorService : BaseService, IAuthorService
    {
        public AuthorService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }
    }
}
