using AutoMapper;
using Bookstore.Abstract.IService;
using Bookstore.Abstract.IServices;
using Bookstore.DataLogic;
using Bookstore.DataLogic.Repository.UnitOfWork;
using Bookstore.Services.AuthorSerice;
using Bookstore.Services.BookService;
using Bookstore.Services.Mapper;
using Bookstore.Services.UploadFileService;
using Bookstore.Services.UserService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Resolver
{
    public class ServicesRegistrator
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IBookService, BookService>();
            services.AddScoped<IAuthorService, AuthorService>();
            services.AddScoped<IUploadService, UploadService>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }
        public static void AddDatabase(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextPool<DefaultContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DbDefault"));
            });
        }
        public static void AddMapper(IServiceCollection services)
        {
            var config = new MapperConfiguration(c =>
            {
                c.AddProfile(new ApplicationProfile());
            });

            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }

        public static void AddJWTAuthentication(IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration.GetSection("AppSettings:TokenKey").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero
                    };
                });
        }
    }
}
