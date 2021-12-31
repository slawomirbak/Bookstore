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

            CreateMap<Test, TestDto>()
             .ForMember(testDto => testDto.Author, opt => opt.MapFrom(test => $"{test.User.FirstName} {test.User.LastName}"));
            CreateMap<TestDto, Test>()
                .ForMember(test => test.Book, opt => opt.Ignore())
                .ForMember(test => test.User, opt => opt.Ignore());

            CreateMap<Question, QuestionDto>()
                .ForMember(test => test.Answer, opt => opt.Ignore());
            CreateMap<QuestionDto, Question>()
                .ForMember(question => question.Test, opt => opt.Ignore());

            CreateMap<Like, LikeDto>();
            CreateMap<LikeDto, Like>()
                .ForMember(like => like.User, opt => opt.Ignore())
                .ForMember(like => like.Test, opt => opt.Ignore());
        }
    }
}
