async function getData() {
  const response = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });
  // console.log(response.json());

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function ProductPages() {
  const products = await getData();
  console.log(products.data);
  return (
    <div>
      <h1>List Product</h1>
      <div className="grid grid-cols-5">
        {products.data.map((product: any) => (
          <div
            className="bg-blue-950 rounded-md h-fit m-5 p-5 text-white "
            key={product}
          >
            <img
              src={product.image}
              alt={product.productName}
              className="object-cover"
            />
            <p className="text-4xl font-bold py-4">{product.productName}</p>
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">{product.price}</p>
              <button className="bg-white text-black rounded-md h-8 w-20 font-semibold text-2xl ">
                add
              </button>
            </div>
            {/* <img src={result.image} alt="" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
