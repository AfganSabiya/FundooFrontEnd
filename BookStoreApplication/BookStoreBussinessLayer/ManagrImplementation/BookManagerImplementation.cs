using BookStoreBussinessLayer.ManagerInterface;
using BookStoreDataLayer.BookModel;
using BookStoreRepositoryLayer.RepositoryInterface;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagrImplementation
{
    public class BookManagerImplementation : IBookManager
    {
        private readonly IBookRepository bookrepository;
        public BookManagerImplementation(IBookRepository repository)
        {
            bookrepository = repository;
        }
        public async Task<string> AddBooksDetail(BookStoreModel bookStoreModel)
        {
            try
            {
              var data =  await this.bookrepository.AddBooksDetail(bookStoreModel);
                return data;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public async Task<string> DeleteBook(int id)
        {
            try
            {
                return await this.bookrepository.DeleteBook(id);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
        public async Task<string> UploadImage(IFormFile form, int id)
        {
            try
            {
                await this.bookrepository.UploadImage(form, id);
                return "Image Uploaded Sucessfully";
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public List<BookStoreModel> GetALLBooks()
        {
            try
            {
                return this.bookrepository.GetALLBooks();
                
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public int CountBooks()
        {
            try
            {
                return this.bookrepository.CountBook();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public string UpdateBookDetails(BookStoreModel bookStoreModel)
        {
            try
            {
               this.bookrepository.UpdateBookDetails(bookStoreModel);
                return "Updated Book Details Sucessfully";
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
