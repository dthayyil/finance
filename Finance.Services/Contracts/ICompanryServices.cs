using Finance.Models.Entities;

namespace Finance.Services.Contracts
{
    public interface ICompanryServices
    {
        IEnumerable<CompanyViewModel> SearchCompany(string searchText);
        IEnumerable<StockValueViewModel> GetHistoricalValues(int companyId);
    }
}
