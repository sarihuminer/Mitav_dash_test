using BuisnessLayer.user;
using DataLayer.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using models= BuisnessLayer.user.models ;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<ContributionController>
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            List<models.User> list= _userRepository.GetUser();
            if(list!=null)
            return Ok(list);
            return BadRequest("canot get data,please reload this file later");
        }

       

        // POST api/<ContributionController>
        [HttpPost]
        public IActionResult Post([FromBody] models.User user)
        {
            if (this._userRepository.AddUser(user))
                return Ok("add user succsessfully");
            return BadRequest("add user failed");
        }

        // PUT api/<ContributionController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]models.User user)
        {
            // if()..
            // checked if this id is the user that create this contribution . 
            //if not return
            //else update
            if (this._userRepository.UpdateUser(user))
                return Ok(true);
            return BadRequest(false);
        }

        
    }
}
