using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.DataLogic.Entities;
using System.Linq;

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

            CreateMap<Book, BookDto>()
                .ForMember(b => b.Author, opt => opt.MapFrom(x => x.Author.Select(a => a.Author)));

            CreateMap<BookDto, Book>()
                .ForMember(b => b.Author, opt => opt.MapFrom(x => x.Author.Select(a => new BookAuthor {})));

            CreateMap<BookRead, BookReadDto>()
                .ForMember(bookRead => bookRead.UserId, opt => opt.MapFrom(user => user.UserId));


            CreateMap<Question, QuestionDto>();
            CreateMap<QuestionDto, Question>();

            CreateMap<Test, TestDto>();
            CreateMap<TestDto, Test>();

            CreateMap<Author, AuthorDto>();
            CreateMap<AuthorDto, Author>();

            CreateMap<BookFormat, BookFormatDto>();
            CreateMap<BookFormatDto, BookFormat>();

            CreateMap<Comment, CommentDto>();
            CreateMap<CommentDto, Comment>();

            CreateMap<BookRating, BookRatingDto>();
            CreateMap<BookRatingDto, BookRating>();

        }
    }
}
