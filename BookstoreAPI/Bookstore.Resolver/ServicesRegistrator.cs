using Bookstore.Abstract.IServices;
using Bookstore.DataLogic;
using Bookstore.DataLogic.Repository.UnitOfWork;
using Bookstore.Services.UserService;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }
        public static void AddDatabase(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextPool<DefaultContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DbDefault"));
            });
        }
    }
}
