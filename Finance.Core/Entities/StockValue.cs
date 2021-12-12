using System;
using System.Collections.Generic;

namespace Finance.Core.Entities
{
    public partial class StockValue
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public double AdjClose { get; set; }
        public long Volume { get; set; }

        public virtual Company Company { get; set; } = null!;
    }
}
