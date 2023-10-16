import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Product from "../../../services/productService";
import ProductCard from "./ProductCard";

interface Props {
  productLists: Product[];
}

function ProductTable({ productLists }: Props) {
  return (
    <TableContainer maxWidth="inherit" overflowX="auto">
      <Table variant="unstyled">
        <Thead borderBottom="2px solid" borderBottomColor="gray.100">
          <Tr textAlign="center">
            <Th paddingLeft="0" textAlign="left" color="gray">
              Product Name
            </Th>
            <Th textAlign="center" color="gray">
              Stock
            </Th>
            <Th textAlign="center" color="gray">
              Price
            </Th>
            <Th paddingRight="0" textAlign="right" color="gray">
              Total Sale
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {productLists.map((list) => (
            <Tr key={list.id} _before={{ border: "0" }}>
              <Td paddingLeft="0">
                <ProductCard
                  avator={list.image}
                  title={list.name}
                  subTitle={list.description}
                />
              </Td>
              <Td textAlign="center">{list.stock} in Stock</Td>
              <Td textAlign="center" fontWeight="bold">
                $ {list.price}
              </Td>
              <Td textAlign="right">{list.totalSale}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
