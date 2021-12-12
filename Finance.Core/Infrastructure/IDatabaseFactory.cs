using Finance.Core.Entities;
using System;

namespace Finance.Core.Infrastructure
{
    public interface IDatabaseFactory : IDisposable
    {
        Context Get();
    }
}
