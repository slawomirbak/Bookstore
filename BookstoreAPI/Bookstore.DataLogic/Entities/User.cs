﻿using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class User: BaseEntity
    {
        public string Email { get; set; }
        public byte[] Password { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public Address Address { get; set; }
        public DateTime CreatedDate { get; set; }
        public ICollection<BookRead> BookRead { get; set; }
        public ICollection<Test> Tests { get; set; }
        public ICollection<Like> Likes { get; set; }
        public void PasswordHash(string password)
        {
            using (var hmac = new HMACSHA512())
            {
                PasswordSalt = hmac.Key;
                Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }
        public bool VerifyPassword(string password)
        {
            using (var hmac = new HMACSHA512(PasswordSalt))
            {
                var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computeHash.Length; i++)
                {
                    if (computeHash[i] != Password[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
