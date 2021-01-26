using Bookstore.DataLogic.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<BookFormat> BookFormats { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<BookRating> BookRatings { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<BookAuthor> BookAuthor { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.Address)
                .WithMany(a => a.Users);

            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(60);

            modelBuilder.Entity<RefreshToken>()
                .HasOne(rt => rt.User);

            modelBuilder.Entity<Book>()
                .HasMany(b => b.Author);

            modelBuilder.Entity<BookAuthor>()
                .HasOne(pt => pt.Author)
                .WithMany(p => p.Book)
                .HasForeignKey(pt => pt.AuthorId);

            modelBuilder.Entity<BookAuthor>()
                .HasOne(pt => pt.Book)
                .WithMany(t => t.Author)
                .HasForeignKey(pt => pt.BookId);

            modelBuilder.Entity<Book>()
                .HasMany(b => b.BookFormats)
                .WithOne(bf => bf.Book);

            modelBuilder.Entity<Book>()
                .HasMany(b => b.Comments)
                .WithOne(c => c.Book);

            modelBuilder.Entity<Book>()
                .HasMany(b => b.Comments)
                .WithOne(c => c.Book);


            modelBuilder.Entity<Book>()
                .HasMany(b => b.Tests)
                .WithOne(t => t.Book);

            modelBuilder.Entity<Test>()
                .HasMany(t => t.Questions)
                .WithOne(q => q.Test);   

        }
    }
}

