using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.DataLogic.Entities;

namespace Bookstore.Services.Mapper
{
    public class ApplicationProfile: Profile
    {
        public ApplicationProfile()
        {
            CreateMap<UserDto, User>()
                .ForMember(s => s.Role,opt => opt.Ignore())
                .ForMember(s => s.PasswordSalt, opt => opt.Ignore())
                .ForMember(s => s.Password, opt => opt.Ignore());

            CreateMap<User, UserDto>();
                

            CreateMap<AddressDto, Address>();
        }
    }
}
