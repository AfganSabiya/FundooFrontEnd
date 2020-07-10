using BookStoreBussinessLayer.ManagerInterface;
using BookStoreDataLayer.CustomerModel;
using BookStoreDataLayer.JsonError;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreApplication.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerManager customermanager;
        private readonly ILogger<CustomerController> logger;
        public CustomerController(ICustomerManager customer, ILogger<CustomerController> log)
        {
            this.customermanager = customer;
            this.logger = log;
        }
        [HttpPost]
        [Route("Addcustomer")]
        public IActionResult AddCustomerDetails(CustomerModel customerModel)
        {
            try
            {
                var Result = this.customermanager.AddCustomerDetails(customerModel);
                logger.LogInformation("Add customer Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = " customer details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpDelete]
        public IActionResult DeleteDetails(int id)
        {
            try
            {
                var Result = this.customermanager.DeleteDetails(id);
                logger.LogInformation("Delete customer Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = "Delete customer details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
        [HttpGet]
        public IActionResult GetCustomerDetails()
        {
            try
            {
                var Result = this.customermanager.GetCustomerDetails();
                logger.LogInformation("Get Customer Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = "Get Customer details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateCustomer(CustomerModel customermodel)
        {
            try
            {
                var Result = this.customermanager.UpdateCustomer(customermodel);
                logger.LogInformation("update Customer Details ");
                return this.Ok(new { Result });
            }
            catch (Exception e)
            {
                var json = new JsonErrorModel();
                json.ErrorMessage = "updated Customer details are wrong ";
                json.ErrorCode = 400;
                return this.BadRequest(json);
                throw new Exception(e.Message);
            }
        }
    }

}
