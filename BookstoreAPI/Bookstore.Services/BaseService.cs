using AutoMapper;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Services
{
    public class BaseService
    {
        protected IUnitOfWork _unitOfWork;
        protected IMapper _mapper;
        public BaseService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
    }
}
