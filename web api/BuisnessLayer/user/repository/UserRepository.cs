using BuisnessLayer.user.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Mail;
using System.Net;
using System.Net.Mime;
using DataLayer;
using System.Linq;
using DataLayer.Entities;

namespace BuisnessLayer.user
{
    public class UserRepository : IUserRepository
    {
        private readonly WebAPIDataContext _context;

        public UserRepository(WebAPIDataContext context)
        {
            this._context = context;
        }

        public bool AddUser(User user)
        {
            try
            {
                UserDB userDB = User.ToUserDB(user);
                _context.Users.Add(userDB);
                _context.SaveChanges();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        public List<User> GetUser()
        {
            try
            {
                List<User> userList = User.FromUserDBList(_context.Users.ToList());
                return userList;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public bool UpdateUser(User user)
        {


            try
            {
                User changeuser = new User(_context.Users.Where(u => u.ID_Num == u.ID_Num).FirstOrDefault());
                changeuser = user;
                _context.SaveChanges();
                return true;
            }

            catch (Exception e)
            {
                return false;
            }

        }
    }
}
