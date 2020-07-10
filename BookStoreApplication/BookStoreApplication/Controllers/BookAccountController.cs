namespace BookStoreApplication.Controllers
{
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreDataLayer.UserModel;
    using BookStoreRepositoryLayer.Loggers;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using Newtonsoft.Json;
    using System.Threading.Tasks;
    using BookStoreDataLayer.JsonError;
    using Microsoft.Extensions.Logging;

    [Route("api/[controller]")]
    public class BookAccountController : ControllerBase
    {
        private readonly ILogger<BookAccountController> logger;
        private readonly IBookAccountManager bookAccountManager;
        public BookAccountController(IBookAccountManager manager, ILogger<BookAccountController> log)
        {
            this.bookAccountManager = manager;
            logger = log;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel registerModel)
        {
            try
            {
                var Result = await this.bookAccountManager.Register(registerModel);
                this.logger.LogInformation("Register Information Details");
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
        public IActionResult Login([FromBody]LoginModel loginModel)
        {
            try
            {
                var data = this.bookAccountManager.Login(loginModel);
                if (data != null)
                {
                    this.logger.LogInformation("Login Information Details");
                    return this.Ok(new { token = data });
                }
                else
                {
                    var json = new JsonErrorModel();
                    json.ErrorMessage = " Invalid email or password ";
                    json.ErrorCode = 400;
                    return this.BadRequest(json);
                }

            }
            catch (Exception e)
            {
                logger.LogInformation("Application End!");
                return this.BadRequest(new { ErrorMessage = "Invalid email or password " });
                throw new Exception(e.Message);
            }
        }
    }
}
