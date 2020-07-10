using BookStoreDataLayer.UserModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagerInterface
{
    public interface IBookAccountManager
    {
        /// <summary>
        /// Method For Registration
        /// </summary>
        /// <param name="registrationModel">The Registration .</param>
        /// <returns></returns>
        Task<string> Register(RegisterModel registerModel);

        /// <summary>
        /// Method  for Login
        /// </summary>
        /// <param name="loginModel">The login .</param>
        /// <returns></returns>
        string Login(LoginModel loginModel);
    }
}
