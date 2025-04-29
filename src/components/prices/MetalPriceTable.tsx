
interface MetalPriceItem {
  type: string;
  description: string;
  price: string | number;
}

interface MetalPriceTableProps {
  items: MetalPriceItem[];
  priceUnit: string;
}

const MetalPriceTable = ({ items, priceUnit }: MetalPriceTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary/10">
            <th className="border px-4 py-2 text-left">Тип металла</th>
            <th className="border px-4 py-2 text-left">Описание</th>
            <th className="border px-4 py-2 text-left">Цена за {priceUnit} (₽)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.type} className={index % 2 === 1 ? "bg-muted/30" : ""}>
              <td className="border px-4 py-2 font-medium">{item.type}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetalPriceTable;
