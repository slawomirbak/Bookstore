﻿using Bookstore.DataLogic.Repository.AuthorRepository;
using Bookstore.DataLogic.Repository.BookRepository;
using Bookstore.DataLogic.Repository.UserRepository;
using System;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.UnitOfWork
{
    public class UnitOfWork: IUnitOfWork, IDisposable
    {
        private DefaultContext _context;

        public UnitOfWork(DefaultContext context)
        {
            _context = context;
        }

        private IUserRepository _userRepository;
        public IUserRepository userRepository => _userRepository ?? (_userRepository = new UserRepository.UserRepository(_context));

        private IBookRepository _bookRepository;
        public IBookRepository bookRepository => _bookRepository ?? (_bookRepository = new BookRepository.BookRepository(_context));

        private IAuthorRepository _authorRepository;
        public IAuthorRepository authorRepository => _authorRepository ?? (_authorRepository = new AuthorRepository.AuthorRepository(_context));

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
