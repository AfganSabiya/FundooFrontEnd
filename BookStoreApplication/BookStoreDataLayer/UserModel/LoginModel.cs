using DataAnnotationsExtensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BookStoreDataLayer.UserModel
{
   public class LoginModel
    {
        /// <summary>
        /// Generate Gets or Sets method for UserEmail
        /// </summary>
        [Email]
        [Required(ErrorMessage = "Email is required")]
       // [RegularExpression(@"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", ErrorMessage = "Please enter a valid email address")]
        public string UserEmail { get; set; }

        /// <summary>
        /// Generate Gets or Sets method for UserPassword
        /// </summary>
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Password is required")]
        //[RegularExpression(@"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",ErrorMessage = "Please enter a valid email address")]
        public string UserPassword { get; set; }
   }
}
