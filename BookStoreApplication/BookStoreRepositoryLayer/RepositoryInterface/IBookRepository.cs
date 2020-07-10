using BookStoreDataLayer.BookModel;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreRepositoryLayer.RepositoryInterface
{
   public  interface IBookRepository
   {
        List<BookStoreModel> GetALLBooks();
        Task<string> AddBooksDetail(BookStoreModel bookStoreModel);
        Task<string> DeleteBook(int id);
        Task<string> UploadImage(IFormFile formFile, int id);
        int CountBook();
        string UpdateBookDetails(BookStoreModel bookStoreModel);


   }
}
