using BookStoreDataLayer.CustomerModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreRepositoryLayer.RepositoryInterface
{
   public interface ICustomerRepository
   {
        string AddCustomerDetails(CustomerModel customerModel);
        string DeleteDetails(int id);
        List<CustomerModel> GetCustomerDetails();
        string UpdateCustomer(CustomerModel customermodel);
        
    }
}
