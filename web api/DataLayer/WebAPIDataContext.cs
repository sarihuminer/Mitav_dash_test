using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using DataLayer.Entities;

namespace DataLayer
{
   
        public class WebAPIDataContext : DbContext
        {
            public WebAPIDataContext(DbContextOptions<WebAPIDataContext> options)
                : base(options)
            {
            }
            public DbSet<UserDB> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserDB>().ToTable("Users");
        }

    }
}

