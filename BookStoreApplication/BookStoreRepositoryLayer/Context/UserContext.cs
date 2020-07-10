

namespace BookStoreRepositoryLayer.Context
{
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.CartModel;
    using BookStoreDataLayer.CustomerModel;
    using BookStoreDataLayer.ShippingModel;
    using BookStoreDataLayer.UserModel;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Text;
    /// <summary>
    /// UserContext is used to get connection with the Database
    /// </summary>
    /// <see cref="Microsoft.EntityFrameworkCore.DbContext"/>
    public class UserContext :DbContext
    {
        /// <summary>
        /// Initializes a new instance of DbContext Class.
        /// Method will be called configure the database and options are used in the Context.
        /// </summary>
        /// <param name="contextOptions">The contextOptions .</param>
        public UserContext(DbContextOptions<UserContext> contextOptions) : base(contextOptions)
        {

        }

        /// Generate Database for Account
        public DbSet<RegisterModel> BookStoreAccount { get; set; }

        public DbSet<BookStoreModel> BookStore { get; set; }

        public DbSet<CartModel> CartTable { get; set; }

        public DbSet<CustomerModel> CustomerTable { get; set; }
        public DbSet<WishListModel> WishTable { get; set; }
    
    }
}
