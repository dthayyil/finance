namespace Finance.Core.Infrastructure
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
