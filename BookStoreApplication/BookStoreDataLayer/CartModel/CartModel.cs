
namespace BookStoreDataLayer.CartModel
{
    using DataAnnotationsExtensions;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    public class CartModel
    {
       
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CartID { get; set; }

    
        [RegularExpression("^([1-9][0-9]{1,3}|100)$")]
        [Required(ErrorMessage = "Book_ID should not be empty")]
        public int BookID { get; set; }

        
        [RegularExpression("^([1-9][0-9]{1,3}|100)$")]
        [Required(ErrorMessage = "SelectBookCount should not be empty")]
        public int SelectBookCount { get; set; }

        [Email]
        [RegularExpression(@"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
    }
}
