using Finance.Core.Entities;

namespace Finance.Core.Infrastructure
{
    public class DatabaseFactory : Disposable, IDatabaseFactory
    {
        private Context dataContext;

        public DatabaseFactory(Context context)
        {
            dataContext = context;
        }

        public Context Get() => dataContext;
        protected override void DisposeCore()
        {
            if (dataContext != null)
                dataContext.Dispose();
        }
    }
}
