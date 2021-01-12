using Bookstore.Abstract.Responses;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Abstract.IServices
{
    public interface IUploadService
    {
        Task<UploadPlainResponse> UploadFile(IFormFile formFile);
    }
}
