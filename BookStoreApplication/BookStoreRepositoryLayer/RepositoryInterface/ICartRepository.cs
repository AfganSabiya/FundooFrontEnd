
namespace BookStoreRepositoryLayer.RepositoryInterface
{
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.CartModel;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface ICartRepository
    {
        /// <summary>
        /// Adds the cart.
        /// </summary>
        /// <param name="cartModel">The cart model.</param>
        /// <returns></returns>
        Task<int> AddCart(CartModel cartModel);

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

        /// <summary>
        /// Gets all cart value. email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        int countcartbook(string email);

        /// <summary>
        /// UpdateBook
        /// </summary>
        /// <param name="cartModels"></param>
        /// <returns></returns>
        string UpdateBook(CartModel cartModels);
    }
}
