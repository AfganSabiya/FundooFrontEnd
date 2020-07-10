using BookStoreDataLayer.BookModel;
using BookStoreDataLayer.CartModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreBussinessLayer.ManagerInterface
{
    public interface ICartManager
    {
        /// <summary>
        /// Adds the cart.
        /// </summary>
        /// <param name="cartModel">The cart model.</param>
        /// <returns></returns>
        Task<string> AddCart(CartModel cartModel);

        /// <summary>
        /// Deletes the cart.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        Task<string> DeleteCart(int id);

        /// <summary>
        /// Counts the cart.
        /// </summary>
        /// <returns></returns>
        int CountCart();

        /// <summary>
        /// Gets all cart value.
        /// </summary>
        /// <returns></returns>
        IEnumerable<object> GetAllCartValue(string email);

        //IQueryable GetCartValue(string email);
     
        int countcartbook(string email);

        string UpdateBook(CartModel cartModel);
    }
}
