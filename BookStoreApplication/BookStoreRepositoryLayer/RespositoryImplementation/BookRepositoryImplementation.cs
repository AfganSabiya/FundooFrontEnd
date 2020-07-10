namespace BookStoreRepositoryLayer.RespositoryImplementation
{
    using BookStoreDataLayer.BookModel;
    using BookStoreRepositoryLayer.Context;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class BookRepositoryImplementation : IBookRepository
    {
        private readonly UserContext userContext;

        private readonly IConfiguration configuration;

        public BookRepositoryImplementation(UserContext userContext, IConfiguration configure)
        {
            this.userContext = userContext;
            this.configuration = configure;
        }
        public async Task<string> AddBooksDetail(BookStoreModel bookStoreModel)
        {
            try
            {
                BookStoreModel bookmodel = new BookStoreModel()
                {
                    BookID = bookStoreModel.BookID,
                    AuthorName = bookStoreModel.AuthorName,
                    BookTitle = bookStoreModel.BookTitle,
                    Description = bookStoreModel.Description,
                    Price = bookStoreModel.Price,
                    BookCount = bookStoreModel.BookCount,
                    BookImage = bookStoreModel.BookImage
                };
                this.userContext.BookStore.Add(bookmodel);
                await this.userContext.SaveChangesAsync();
                return "Book Added Sucessfully";
            }catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public async Task<string> DeleteBook(int id)
        {
            try
            {
                var data = this.userContext.BookStore.Where(option => option.BookID == id).SingleOrDefault();
                if (data != null)
                {
                    userContext.BookStore.Remove(data);
                    userContext.SaveChanges();
                    await this.userContext.SaveChangesAsync();
                    return "Book Deleted Sucessfully";
                }
                else
                {
                    return null;
                }
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
           
        }
        
        public async Task<string> UploadImage(IFormFile formfile, int id)
        {
            try
            {
                var stream = formfile.OpenReadStream();
                var name = formfile.FileName;
                Account account = new Account(
                this.configuration["Cloudinary:CloudName"],
                this.configuration["Cloudinary:ApiKey"],
                this.configuration["Cloudinary:ApiSecret"]);
                Cloudinary cloudinary = new Cloudinary(account);
                var uploadfile = new ImageUploadParams()
                {
                    File = new FileDescription(name, stream)
                };
                ImageUploadResult imageUpload = cloudinary.Upload(uploadfile);
                var data = this.userContext.BookStore.Where(op => op.BookID == id).SingleOrDefault();
                data.BookImage = imageUpload.Url.ToString();
                await this.userContext.SaveChangesAsync();
                return data.BookImage;
            }
            catch (Exception e)
            {
                return e.Message;
            }

        }

        public List<BookStoreModel> GetALLBooks()
        {
            try
            {
                this.userContext.SaveChanges();
                return this.userContext.BookStore.ToList();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public int CountBook()
        {
            try
            {
                var result = this.userContext.BookStore.ToList();
                return result.Count;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }
     
        public string UpdateBookDetails(BookStoreModel bookStoreModel)
        {
            try
            {
                var result = this.userContext.BookStore.Where(op => op.BookID == bookStoreModel.BookID).SingleOrDefault();
                if (result != null)
                {
                    result.Price = bookStoreModel.Price;
                    result.AuthorName = bookStoreModel.AuthorName;
                  //  result.BookTitle = bookStoreModel.BookTitle;
                    result.BookCount = bookStoreModel.BookCount;
                    this.userContext.BookStore.Update(result);
                    this.userContext.SaveChangesAsync();
                    return "Updated Book Details Sucessfully";
                   // return Task.Run(() => userContext.SaveChanges());
                }
                return default;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }
    }
}
