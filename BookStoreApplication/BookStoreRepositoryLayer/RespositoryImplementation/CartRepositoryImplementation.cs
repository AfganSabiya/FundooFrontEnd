

namespace BookStoreRepositoryLayer.RespositoryImplementation
{
    using BookStoreDataLayer.BookModel;
    using BookStoreDataLayer.CartModel;
    using BookStoreRepositoryLayer.Context;
    using BookStoreRepositoryLayer.RepositoryInterface;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CartRepositoryImplementation : ICartRepository
    {
        private readonly UserContext userContext;

        public CartRepositoryImplementation(UserContext user)
        {
            this.userContext = user;
        }

        public Task<int> AddCart(CartModel cartModel)
        {
            try
            {
                CartModel cart = new CartModel()
                {
                    CartID = cartModel.CartID,
                    BookID = cartModel.BookID,
                    SelectBookCount = cartModel.SelectBookCount,
                    Email = cartModel.Email
                };
                this.userContext.CartTable.Add(cartModel);
                var data = this.userContext.SaveChangesAsync();
                return data;

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

                var result = this.userContext.CartTable.ToList();
                return result.Count;
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
                var fat = this.userContext.CartTable.Where(op=> op.CartID == id).SingleOrDefault();
                if (fat != null)
                {
                    this.userContext.CartTable.Remove(fat);
                    await this.userContext.SaveChangesAsync();
                    return "Cart Id Deleted Successfully";
                }
                else
                {
                    return null;
                }
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

                /* var book = this.userContext.BookStore.ToList();
                 var cartList = this.userContext.CartTable.Where(y => y.Email == email);
                 var cartbooks = this.userContext.BookStore.Where(t => cartList.Any(cart => cart.BookID == t.BookID));
                 return cartbooks.ToList();*/
               
                var result = this.userContext.CartTable.Join(this.userContext.BookStore,
                Cart => Cart.BookID,
                Book => Book.BookID,
                  (Cart, Book) =>
                  new
                  {
                      cartID = Cart.CartID,
                      bookID = Book.BookID,
                      bookTitle = Book.BookTitle,
                      authorName = Book.AuthorName,
                      bookImage = Book.BookImage,
                      price = Book.Price,
                      bookCount = Book.BookCount,
                      selectBookCount = Cart.SelectBookCount
                  }).ToList();
                return result;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }


        public int countcartbook(string email)
        {
            var data = this.userContext.BookStoreAccount.Where(op => op.UserEmail == email).FirstOrDefault();
            if (data != null)
            {
                var result = this.userContext.CartTable.Where(op => op.Email == email).ToList();
                return result.Count;
            }
            return default;
        }

        public string UpdateBook(CartModel cartModel)
        {
            try
            {
                var data = this.userContext.BookStoreAccount.Where(op => op.UserEmail == cartModel.Email).FirstOrDefault();
                if (data != null)
                {
                    var result = this.userContext.CartTable.Where(op => op.CartID == cartModel.CartID).SingleOrDefault();
                    if (result != null)
                    {
                        result.BookID = cartModel.BookID;
                        result.Email = cartModel.Email;
                        result.SelectBookCount = cartModel.SelectBookCount;
                        this.userContext.CartTable.Update(result);
                        this.userContext.SaveChanges();
                        return "Update cart Book Sucessfully";
                    }
                }
                return default;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
