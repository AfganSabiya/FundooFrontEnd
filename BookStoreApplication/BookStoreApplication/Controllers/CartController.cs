
namespace BookStoreApplication.Controllers
{
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.CartModel;
    using BookStoreDataLayer.JsonError;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    [Authorize]
    [Route("api/[Controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        public readonly ICartManager cartManager;
        public readonly ILogger<CartController> logger;
        public CartController(ICartManager manager, ILogger<CartController> log)
        {
            this.cartManager = manager;
            this.logger = log;
        }

        [HttpPost]
        public async Task<IActionResult> AddCardDetail([FromBody]CartModel cartModel)
        {
            try
            {
                var Result = await this.cartManager.AddCart(cartModel);
                logger.LogInformation("Add cart Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Cart details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
    
        [HttpGet]
        [Route("GetBookCount")]
        public IActionResult CountCart()
        {
            try
            {
                var result = this.cartManager.CountCart();
                logger.LogInformation("Count cart Details ");
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
        public async Task<IActionResult> DeleteCart(int id)
        {
            try
            {
                var Result = await this.cartManager.DeleteCart(id);
                logger.LogInformation("Delete  Cart Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Delete cart details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpGet]
        [Route("countbookemail")]
        public IActionResult Countcartbook(string email)
        {
            try
            {
                var result = this.cartManager.countcartbook(email);
                logger.LogInformation("Delete  Cart Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Delete cart details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);

            }
        }
        [HttpGet]
        [Route("getcartbookemail")]
        public IActionResult GetAllCartValue(string email)
        {

            try
            {
                var result = cartManager.GetAllCartValue(email);
                logger.LogInformation("GetAll Cart Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " cart details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpPost("cartupdate")]
        public IActionResult UpdateBook(CartModel cartModel)
        {
            try
            {
                var result = this.cartManager.UpdateBook(cartModel);
                logger.LogInformation("Update Cart Details ");
                return this.Ok(new { result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " Updatecart details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
    }
}
