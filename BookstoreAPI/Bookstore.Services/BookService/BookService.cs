using AutoMapper;
using Bookstore.Abstract.IServices;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Services.BookService
{
    public class BookService : BaseService, IBookService
    {
        public BookService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }
    }
}
