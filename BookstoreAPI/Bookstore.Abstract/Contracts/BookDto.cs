using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class BookDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public string PublishingHouse { get; set; }
        public string TableofContents { get; set; }
        public string ShortDescription { get; set; }
        public string Language { get; set; }
        public string ISBN { get; set; }
        public int NumberOfPages { get; set; }
        public float AverageRating { get; set; }
        public string Genre { get; set; }
        public DateTime ReleaseDate { get; set; }
        public ICollection<AuthorDto> Author { get; set; }
        public ICollection<BookFormatDto> BookFormats { get; set; }
        public ICollection<CommentDto> Comments { get; set; }
        public ICollection<BookRatingDto> BookRatings { get; set; }
        public ICollection<TestDto> Tests { get; set; }

    }
}
