import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const products = await res.json();
  return products;
}

export default async function ProductsSSG() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Products (SSG)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-400 flex flex-col justify-between min-h-[340px]">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="mx-auto mb-4 object-contain h-48"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
