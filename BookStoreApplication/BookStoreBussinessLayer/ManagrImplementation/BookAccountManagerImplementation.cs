
namespace BookStoreBussinessLayer.ManagrImplementation
{
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreDataLayer.UserModel;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
   public class BookAccountManagerImplementation : IBookAccountManager
   {
    
        private readonly IBookAccountRepository bookaccountRepository;

        public BookAccountManagerImplementation(IBookAccountRepository bookAccount)
        {
            this.bookaccountRepository = bookAccount;
        }
        public BookAccountManagerImplementation()
        {

        }
        public async Task<string> Register(RegisterModel registerModel)
        {
            try
            {
             var data = await  this.bookaccountRepository.Register(registerModel);
                return data;
               
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
        public string Login(LoginModel loginModel)
        {
            try
            {
             return this.bookaccountRepository.Login(loginModel);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }


    }
}
