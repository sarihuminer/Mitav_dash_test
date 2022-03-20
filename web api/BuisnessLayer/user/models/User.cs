using System;
using System.Collections.Generic;
using System.Text;
using DataLayer.Entities;

namespace BuisnessLayer.user.models
{
    public class User
    {
        public int ID_Num { get; set; }
        public string Full_Name { get; set; }
        public DateTime Birth_Date { get; set; }

        #region convertions
        public static UserDB ToUserDB(User user)
        {
            return new UserDB
            {
                Birth_Date = user.Birth_Date,
                Full_Name = user.Full_Name,
                ID_Num = user.ID_Num
            };
        }

        //public List<UserDB> ToUserDBList(List<User> user)
        //{

        //    return new UserDB
        //    {
        //        Birth_Date = user.Birth_Date,
        //        Full_Name = user.Full_Name,
        //        ID_Num = user.ID_Num
        //    };
        //}
        public static List<User> FromUserDBList(List<UserDB> userDB)
        {
            List<User> ulist =new List<User>();
            foreach (var item in userDB)
            {
                ulist.Add(new User(item.ID_Num, item.Full_Name, item.Birth_Date));
            }

            return ulist;
        }
        #endregion
        public User()
        {

        }
        public User(int id, string Full_Name, DateTime Birth_Date)
        {
            this.ID_Num = id;
            this.Full_Name = Full_Name;
            this.Birth_Date = Birth_Date;
        }
        public User(UserDB userDB)
        {
            this.ID_Num = userDB.ID_Num;
            this.Full_Name = userDB.Full_Name;
            this.Birth_Date = userDB.Birth_Date;
        }
    }
}
