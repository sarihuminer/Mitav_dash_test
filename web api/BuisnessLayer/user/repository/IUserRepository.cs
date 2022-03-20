using BuisnessLayer.user.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuisnessLayer.user
{
  public  interface IUserRepository
    {
         List<User> GetUser();
         bool AddUser(User contribution);
         bool UpdateUser(User contribution);
    }
}
