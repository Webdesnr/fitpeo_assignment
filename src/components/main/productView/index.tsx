import Frame from "../../common/Frame";
import Content from "./Content";
import Header from "./Header";
import ProductTable from "./ProductTable";
import productImg from "../../../assets/abstract_0,5x.webp";
import { Box } from "@chakra-ui/react";

function ProductView() {
  const products = [
    {
      id: 1,
      name: "Abstract 3D",
      image: productImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stock: 32,
      price: 45.99,
      totalSale: 20,
    },
    {
      id: 2,
      name: "Sarphens Illustration",
      image: productImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stock: 32,
      price: 45.99,
      totalSale: 20,
    },
  ];
  return (
    <Frame>
      <Header />
      <Content>
        <ProductTable productLists={products} />
      </Content>
    </Frame>
  );
}

export default ProductView;
