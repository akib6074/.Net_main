using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.EmployeeData;
using WebApp.Models;
using Microsoft.Extensions.Configuration;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {

        private IEmployeeData _employeeData;
        public EmployeesController(IEmployeeData employeeData)
        {
            _employeeData = employeeData;
        }

        [HttpGet]
   
        public IActionResult GetEmployee()
        {
            return Ok(_employeeData.GetEmployees());  
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetEmployee(Guid id)
        {
            var employee = _employeeData.GetEmployee(id);

            if(employee != null)
            {
                return Ok(employee);
            }
            return NotFound($"Employee wiht id: {id} was not found");
        }

        [HttpPost]
       
        public IActionResult GetEmployee(Employee employee)
        {
            _employeeData.AddEmployee(employee);
            return Created(HttpContext.Request.Scheme 
                + "://" 
                + HttpContext.Request.Host 
                + HttpContext.Request.Path 
                + 
                "/" 
                + employee.Id, employee);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteEmployee(Guid id)
        {
            var employee = _employeeData.GetEmployee(id);

            if (employee != null)
            {
                _employeeData.DeleteEmployee(employee);
                return Ok();
            }
            return NotFound($"Employee wiht id: {id} was not found");
        }

        [HttpPatch]
        [Route("{id}")]
        public IActionResult EditEmployee(Guid id, Employee employee)
        {
            var existingEmployee = _employeeData.GetEmployee(id);

            if (existingEmployee != null)
            {
                employee.Id = existingEmployee.Id;
                _employeeData.EditEmployee(employee);
            }
            return Ok(employee);
        }
    }
}
