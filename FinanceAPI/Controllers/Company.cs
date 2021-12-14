using Finance.Models.Entities;
using Finance.Services.Contracts;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc; 
namespace FinanceAPI.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController] 
    public class Company : ControllerBase
    {
        private readonly ICompanryServices CompanryServices;

        public Company(ICompanryServices companryServices)
        {
            CompanryServices = companryServices;
        }

        [EnableCors("MyPolicy")]
        [HttpGet]
        [Route("Search")]
        public IEnumerable<CompanyViewModel> Get(string text) => CompanryServices.SearchCompany(text);

        [EnableCors("MyPolicy")]
        [HttpGet]
        [Route("History")]
        public IEnumerable<StockValueViewModel> History(int id) => CompanryServices.GetHistoricalValues(id);
    }
}
