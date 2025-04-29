
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PriceItem {
  name: string;
  price: string;
  unit: string;
}

interface PriceTableProps {
  type: "black" | "color";
  items: PriceItem[];
}

const PriceTable = ({ type, items }: PriceTableProps) => {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5">
            <TableHead className="w-[60%]">Наименование</TableHead>
            <TableHead className="text-right">Цена за {type === "black" ? "тонну" : "кг"} (₽)</TableHead>
            <TableHead className="text-right w-[15%]">Ед. изм.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right font-bold">{item.price} ₽</TableCell>
              <TableCell className="text-right">{item.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PriceTable;
