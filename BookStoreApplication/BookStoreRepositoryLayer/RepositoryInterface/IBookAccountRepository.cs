using BookStoreDataLayer.UserModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreRepositoryLayer.RepositoryInterface
{
   public interface IBookAccountRepository
    {
        /// <summary>
        /// Method For Register Account.
        /// </summary>
        /// <param name="registrationModel">The register .</param>
        /// <returns></returns>
        Task<string> Register(RegisterModel registerModel);

        /// <summary>
        /// Method for JwtTokenGeneate
        /// </summary>
        /// <param name="loginModel">The login .</param>
        /// <returns></returns>
       // string Login(LoginModel loginModel);
        string JWTTokenGenerate(LoginModel loginModel);
        /// <summary>
        /// Method For Login
        /// </summary>
        /// <param name="loginModel">login model .</param>
        /// <returns></returns>
        string Login(LoginModel loginModel);
    }
}
