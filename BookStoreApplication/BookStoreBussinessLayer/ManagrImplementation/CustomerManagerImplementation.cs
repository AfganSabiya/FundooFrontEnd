using BookStoreBussinessLayer.ManagerInterface;
using BookStoreDataLayer.CustomerModel;
using BookStoreRepositoryLayer.RepositoryInterface;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagrImplementation
{
    public class CustomerManagerImplementation : ICustomerManager
    {

        private ICustomerRepository customerRepository;
        public CustomerManagerImplementation(ICustomerRepository repository)
        {
            this.customerRepository = repository;
        }
        public string AddCustomerDetails(CustomerModel customerModel)
        {
            try
            {
                var data = this.customerRepository.AddCustomerDetails(customerModel);
                return data;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public string DeleteDetails(int id)
        {
            try
            {
               return this.customerRepository.DeleteDetails(id);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public List<CustomerModel> GetCustomerDetails()
        {
            try
            {
                var data = this.customerRepository.GetCustomerDetails();
                return data;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public string UpdateCustomer(CustomerModel customermodel)
        {
            try
            {
                var data = this.customerRepository.UpdateCustomer(customermodel);
                return data;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
