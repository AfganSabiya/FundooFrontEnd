
namespace BookStoreApplication.Controllers
{
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.JsonError;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    [Authorize]
    [Route("api/[Controller]")]
    [ApiController]
    public class BookStoreController : ControllerBase
    {
        private readonly ILogger<BookStoreController> logger;
        private readonly IBookManager bookManager;
        public BookStoreController(IBookManager manager, ILogger<BookStoreController> log)
        {
            this.bookManager = manager;
            this.logger = log;
        }

        [HttpPost]
        public async Task<IActionResult> AddBooksDetail([FromBody]BookStoreModel bookStoreModel)
        {
            try
            {
                var Result = await this.bookManager.AddBooksDetail(bookStoreModel);
                logger.LogInformation("Add Book Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Register details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpGet]
        [Route("GetallBooks")]
        public IActionResult GetALLBooks()
        {
            try
            {
                List<BookStoreModel> Result = this.bookManager.GetALLBooks();
                logger.LogInformation("Get All Books Details ");
                return this.Ok(new { Result });
            }

            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Register details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }

        [HttpGet]
        public IActionResult CountBooks()
        {
            try
            {
                var result = this.bookManager.CountBooks();
                logger.LogInformation("Count Book Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Book count details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);

            }
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteBook(int id)
        {
            try
            {
                var Result = await this.bookManager.DeleteBook(id);
                logger.LogInformation("Delete Books Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Register details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpPost]
        [Route("UploadImage")]
        public async Task<IActionResult> UploadImage(IFormFile formFile, int id)
        {
            try
            {
                var result = await this.bookManager.UploadImage(formFile, id);
                logger.LogInformation("Upload Image Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Book count details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpPost("book")]
        public IActionResult UpdateBook(BookStoreModel bookStore)
        {
            try
            {
                var result =  this.bookManager.UpdateBookDetails(bookStore);
                logger.LogInformation("Updatebook Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = "Updatebook details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }

    }
}
