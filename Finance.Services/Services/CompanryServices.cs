using Finance.Core.Entities;
using Finance.Core.Infrastructure;
using Finance.Models.Entities;
using Finance.Services.Contracts;

namespace Finance.Services.Services
{
    public class CompanryServices : ICompanryServices
    {

        private readonly IRepository<Company> CompanyRepository;
        private readonly IRepository<StockValue> StockValueRepository;

        public CompanryServices(IRepository<Company> companyRepository, IRepository<StockValue> stockValueRepository)
        {
            StockValueRepository = stockValueRepository;
            CompanyRepository = companyRepository;
        }

        public IEnumerable<StockValueViewModel> GetHistoricalValues(int companyId)
        {
            return StockValueRepository.
                GetMany(x=>x.CompanyId == companyId).
                Select(x => new StockValueViewModel 
                { CompanyId = x.CompanyId, 
                    Id = x.Id ,
                    AdjClose=x.AdjClose,
                    Close=x.Close,
                    Date =x.Date,
                    Volume=x.Volume,
                    High=x.High,
                    Low=x.Low,  
                    Open=x.Open,
                });
        }

        public IEnumerable<CompanyViewModel> SearchCompany(string searchText) => 
            CompanyRepository.GetMany(x => x.Name.Contains(searchText) || x.Code.Contains(searchText)).
            Select(y => new CompanyViewModel
                            { Id = y.Id, Name = y.Name, Code = y.Code });
    }
}
