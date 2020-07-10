using BookStoreDataLayer.CustomerModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagerInterface
{
    public interface ICustomerManager 
    {
        string AddCustomerDetails(CustomerModel customerModel);
        string DeleteDetails(int id);
        List<CustomerModel> GetCustomerDetails();
        
        string UpdateCustomer(CustomerModel customermodel);
    }

}
