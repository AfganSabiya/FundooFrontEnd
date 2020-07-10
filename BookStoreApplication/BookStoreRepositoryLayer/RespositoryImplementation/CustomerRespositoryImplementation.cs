
namespace BookStoreRepositoryLayer.RespositoryImplementation
{
    using BookStoreDataLayer.CustomerModel;
    using BookStoreRepositoryLayer.Context;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    public class CustomerRespositoryImplementation : ICustomerRepository
    {
        private readonly UserContext userContext;
        public CustomerRespositoryImplementation(UserContext user)
        {
            this.userContext = user;
        }
        public string AddCustomerDetails(CustomerModel customerModel)
        {
            CustomerModel model = new CustomerModel()
            {
                CustomerID = customerModel.CustomerID,
                Name = customerModel.Name,
                Email = customerModel.Email,
                PhoneNumber = customerModel.PhoneNumber,
                Pincode = customerModel.Pincode,
                Locality = customerModel.Locality,
                Address = customerModel.Address,
                City = customerModel.City,
                LandMark = customerModel.LandMark,
                Type = customerModel.Type,
                OrderId = customerModel.OrderId
            };
            this.userContext.CustomerTable.Add(model);
            this.userContext.SaveChanges();
            return "Customer Added SucessFully";
        }

        public string DeleteDetails(int id)
        {
            try
            {
                var result = this.userContext.CustomerTable.Where(option => option.CustomerID == id).SingleOrDefault();
                if (result != null)
                {
                    this.userContext.CustomerTable.Remove(result);
                     this.userContext.SaveChanges();
                    return " customer id deleted";
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

       

        public  List<CustomerModel> GetCustomerDetails()
        {
            try
            {
                this.userContext.SaveChanges();
                return this.userContext.CustomerTable.ToList();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public string UpdateCustomer(CustomerModel customermodel)
        {
            var result = this.userContext.CustomerTable.Where(op => op.CustomerID == customermodel.CustomerID).FirstOrDefault();
            if (result != null)
            {
                result.Name = customermodel.Name;
                result.PhoneNumber = customermodel.PhoneNumber;
                result.Pincode = customermodel.Pincode;
                result.Locality = customermodel.Locality;
                result.Address = customermodel.Address;
                result.City = customermodel.City;
                result.LandMark = customermodel.LandMark;
                result.Type = customermodel.Type;
                this.userContext.CustomerTable.Update(result);
               //  await Task.Run(() => context.SaveChanges());
               this.userContext.SaveChangesAsync();
                return "Updated ";
            }
            return null;
        }
    }
    
}
