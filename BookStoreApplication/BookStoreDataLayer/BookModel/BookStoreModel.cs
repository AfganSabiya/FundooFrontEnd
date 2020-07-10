using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BookStoreDataLayer.BookModel
{
    public class BookStoreModel
    {
       
        [Key]
        public int BookID { get; set; }

        [Required(ErrorMessage = "BookTitle cannot be empty")]
       // [RegularExpression(@"[^[a-zA-Z][a-zA-Z\\s]+$")]
        public string BookTitle { get; set; }

        [Required(ErrorMessage = "AuthorName cannot be empty")]
       // [RegularExpression(@"[^[a-zA-Z][a-zA-Z\\s]+$")]
        public string AuthorName { get; set; }

        [Required(ErrorMessage = "Description cannot be empty")]
      //  [RegularExpression(@"[^[a-zA-Z][a-zA-Z\\s]+$")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Price cannot be empty")]
       // [RegularExpression("^([1-9][0-9]{1,3}|50000)$")]
        public int Price { get; set; }

        [Required(ErrorMessage = "BookImage cannot be empty")]
        public string  BookImage { get; set; }

        [Required(ErrorMessage = "BookCount cannot be empty")]
        public int BookCount { get; set; }

    }
}
