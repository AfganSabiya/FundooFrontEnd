using BookStoreDataLayer.BookModel;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagerInterface
{
    public interface IBookManager
    {
        List<BookStoreModel> GetALLBooks();
        Task<string> AddBooksDetail(BookStoreModel bookStoreModel);
        Task<string> DeleteBook(int id);
        Task<string> UploadImage(IFormFile formFile, int id);
        int CountBooks();
        string UpdateBookDetails(BookStoreModel bookStoreModel);
    }
}
