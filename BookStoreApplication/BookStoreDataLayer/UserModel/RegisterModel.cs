

namespace BookStoreDataLayer.UserModel
{
    using DataAnnotationsExtensions;
    using Microsoft.Web.Mvc.Controls;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    [System.Serializable]
    public class RegisterModel 
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [RegularExpression(@"[^[a-zA-Z][a-zA-Z\\s]+$")]
        [Required(ErrorMessage = "LastName is required")]
        public string FirstName { get; set; }

        [RegularExpression(@"[^[a-zA-Z][a-zA-Z\\s]+$")]
        [Required(ErrorMessage = "LastName is required")]
        public string LastName { get; set; }

        [Email]
        [RegularExpression(@"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
        [Required(ErrorMessage = "Email is required")]
        public string UserEmail { get; set; }

        [DataType(DataType.Password)]
        [RegularExpression(@"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
        [Required(ErrorMessage = "Password is required")]
        public string UserPassword { get; set; }

    }
}

