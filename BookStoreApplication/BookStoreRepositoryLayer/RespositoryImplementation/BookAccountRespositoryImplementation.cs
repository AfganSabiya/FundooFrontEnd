
namespace BookStoreRepositoryLayer.RespositoryImplementation
{

    using BookStoreDataLayer.UserModel;
    using BookStoreRepositoryLayer.Context;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;
    using StackExchange.Redis;
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    public class BookAccountRespositoryImplementation : IBookAccountRepository
    {
        /// <summary>
        /// UserContext method is calling for Database set
        /// </summary>
        private readonly UserContext userContext;

        private readonly IConfiguration configuration;

        public BookAccountRespositoryImplementation(UserContext userContext, IConfiguration configuration)
        {
            this.userContext = userContext;
            this.configuration = configuration;
        }
        public async Task<string> Register(RegisterModel registerModel)
        {
            RegisterModel storeAccount = new RegisterModel()
            {
                Id = registerModel.Id,
                UserEmail = registerModel.UserEmail,
                FirstName = registerModel.FirstName,
                LastName = registerModel.LastName,
                UserPassword = registerModel.UserPassword,
            };
            var password = encrpytionpassword.EncodePasswordMd5(registerModel.UserPassword);
            storeAccount.UserPassword = password;
            this.userContext.BookStoreAccount.Add(storeAccount);
            await this.userContext.SaveChangesAsync();
            return "Registered Successfull";
        }

        public string Login(LoginModel loginModel)
        {
            var token = string.Empty;
            if (CheckEmail(loginModel.UserEmail))
            {
                if (CheckPassword(loginModel.UserEmail, loginModel.UserPassword))
                {
                    token = this.JWTTokenGenerate(loginModel);
                }
            }
            else
            {
                return " Invaild Email and Password";
            }
            return token;
        }

        public string JWTTokenGenerate(LoginModel loginModel)
        {
            var claims = new[]
             {
                new Claim(JwtRegisteredClaimNames.Sub, loginModel.UserEmail),
                new Claim(JwtRegisteredClaimNames.Email, loginModel.UserPassword),
            };
            var key = configuration["JWT:SecretKey"];
            var symmetrickey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(symmetrickey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken
            (
                 issuer: configuration["JWT:url"],
                 audience: configuration["JWT:url"],
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: credentials
            );
            var FinalEncodedToken = new JwtSecurityTokenHandler().WriteToken(token);
            var cacheKey = loginModel.UserEmail;
            ConnectionMultiplexer multiplexer = ConnectionMultiplexer.Connect("127.0.0.1:6379");
            IDatabase database = multiplexer.GetDatabase();
            database.StringSet($"cacheKey", FinalEncodedToken.ToString());
            database.StringGet($"cacheKey");
            Task.Run(() => this.userContext.SaveChangesAsync());
            return FinalEncodedToken;

        }

        /// <summary>
        /// Method for Checking the Password
        /// </summary>
        /// <param name="checkUserEmail">Email .</param>
        /// <param name="checkUserPassword">Password .</param>
        /// <returns></returns>
        public bool CheckPassword(string checkUserEmail, string checkUserPassword)
        {
            var result = userContext.BookStoreAccount.Where(option => option.UserEmail == checkUserEmail).SingleOrDefault();
            if (result != null)
            {
                var encrptpassword = encrpytionpassword.EncodePasswordMd5(checkUserPassword);
                var results = userContext.BookStoreAccount.Where(option => option.UserEmail == checkUserEmail &&
                option.UserPassword == encrptpassword).FirstOrDefault();
                if (results != null)
                {
                    return true;
                }
            }
            return false;

        }

        /// <summary>
        /// Method for Checking Email
        /// </summary>  
        /// <param name="checkUserEmail">Email .</param>
        /// <returns></returns>
        public bool CheckEmail(string checkUserEmail)
        {
            var b = userContext.BookStoreAccount.Where(option => option.UserEmail == checkUserEmail).SingleOrDefault();
            if (b != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
