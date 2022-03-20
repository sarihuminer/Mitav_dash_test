using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
namespace DataLayer.Entities
{
    public class UserDB
    {
        public int ID { get; set; }
        [RegularExpression(@"^[0-9]{9}$",
            ErrorMessage = "not valid Israeli id num.")]
        public string ID_Num { get; set; }
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,20}$",
        ErrorMessage = "Characters are not allowed.")]
        public string Full_Name { get; set; }
        public DateTime Birth_Date { get; set; }
    }
}
