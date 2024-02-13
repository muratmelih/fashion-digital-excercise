import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Nav } from "../app/components/Nav";
import { Product } from "../app/components/Product/product";

describe("Nav url check", () => {
  it("Product list url should be 2 in doc", () => {
    render(<Nav />);

    const productListLink = screen.getAllByText("Product List");

    expect(productListLink.length > 0);
  });
});

describe("Product component check", () => {
  it("Product component should render description and price", () => {
    const mockData = {
      description: "test product",
      priceO: "100",
      brand:'test brand',
      images:[
        '/testimgurl'
      ],
      sizes:['xl','s'],
      url:'/'
    };
    render(<Product data={mockData} />);

    const productDesc = screen.getByText("test product");
    const price = screen.getByText("$100");

    expect(productDesc).toBeInTheDocument();
  });
});
