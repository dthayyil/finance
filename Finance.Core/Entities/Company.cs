using System;
using System.Collections.Generic;

namespace Finance.Core.Entities
{
    public partial class Company
    {
        public Company()
        {
            StockValues = new HashSet<StockValue>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Code { get; set; } = null!;

        public virtual ICollection<StockValue> StockValues { get; set; }
    }
}
