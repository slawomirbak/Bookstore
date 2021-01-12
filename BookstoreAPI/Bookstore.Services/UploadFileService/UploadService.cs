using Amazon.S3;
using Amazon.S3.Model;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Services.UploadFileService
{
    public class UploadService : IUploadService
    {
        private readonly IConfiguration _configuration;
        public UploadService(IConfiguration configuration)
        {
            _configuration = configuration
;        }
        public async Task<UploadPlainResponse> UploadFile(IFormFile file)
        {
            var fileName = Guid.NewGuid() + file.FileName;

            var client = new AmazonS3Client(_configuration.GetSection("AmazonS3:accessKey").Value, _configuration.GetSection("AmazonS3:accessSecret").Value, Amazon.RegionEndpoint.EUCentral1);
            byte[] fileBytes = new Byte[file.Length];
            file.OpenReadStream().Read(fileBytes, 0, Int32.Parse(file.Length.ToString()));

            PutObjectResponse putObjectResponse = null;
            UploadPlainResponse uploadPlainResponse = new UploadPlainResponse();

            using (var stream = new MemoryStream(fileBytes))
            {
                var request = new PutObjectRequest
                {
                    //TODO get thisinformation from configuration
                    BucketName = _configuration.GetSection("AmazonS3:bucket").Value,
                    Key = fileName,
                    InputStream = stream,
                    ContentType = file.ContentType,
                    CannedACL = S3CannedACL.PublicRead
                };

                putObjectResponse = await client.PutObjectAsync(request);

                if (putObjectResponse.HttpStatusCode == System.Net.HttpStatusCode.OK)
                {
                    uploadPlainResponse.fileName = _configuration.GetSection("AmazonS3:rootUrl").Value + fileName;
                }
                else
                {
                    uploadPlainResponse.IsSuccessful = false;
                    uploadPlainResponse.ErrorMessage = putObjectResponse.HttpStatusCode.ToString();
                }
                return uploadPlainResponse;
            }
        }
    }
}
