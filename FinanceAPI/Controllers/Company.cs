using Finance.Models.Entities;
using Finance.Services.Contracts;
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

        [HttpGet]
        [Route("Search")]
        public IEnumerable<CompanyViewModel> Get(string text) => CompanryServices.SearchCompany(text);


        [HttpGet]
        [Route("History")]
        public IEnumerable<StockValueViewModel> History(int id) => CompanryServices.GetHistoricalValues(id);
    }
}
