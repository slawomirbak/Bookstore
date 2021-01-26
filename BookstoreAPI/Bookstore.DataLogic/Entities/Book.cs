using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Book: BaseEntity
    {
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
        public ICollection<BookAuthor> Author { get; set; }

        public ICollection<BookFormat> BookFormats { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<BookRating> BookRatings { get; set; }
        public ICollection<Test> Tests { get; set; }
    }
}
