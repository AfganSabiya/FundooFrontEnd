

namespace BookStoreBussinessLayer.ManagrImplementation
{
    using BookStoreBussinessLayer.ManagerInterface;
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.CartModel;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CartManager : ICartManager
    {
        private readonly ICartRepository cartrepository;
        public CartManager(ICartRepository cart)
        {
            this.cartrepository = cart;
        }
        public async Task<string> AddCart(CartModel cartModel)
        {
            try
            {
                await this.cartrepository.AddCart(cartModel);
                return "Added to cart Sucess" ;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public int CountCart()
        {
            try
            {
                return this.cartrepository.CountCart();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

   

        public async Task<string> DeleteCart(int id)
        {
            try
            {
                return await this.cartrepository.DeleteCart(id);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public IEnumerable<object> GetAllCartValue(string email)
        {
            try
            {
                return this.cartrepository.GetAllCartValue(email);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }


        public int countcartbook(string email)
        {
            try
            {
                return this.cartrepository.countcartbook(email);
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public string UpdateBook(CartModel cartModel)
        {
            try
            {
                return this.cartrepository.UpdateBook(cartModel);
               

            }catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
