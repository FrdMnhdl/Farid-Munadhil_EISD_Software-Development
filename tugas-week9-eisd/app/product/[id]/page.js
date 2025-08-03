import Image from 'next/image';
import Head from 'next/head';

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white mt-26 mb-26">
      <Head>
        <title>{product.title} - Cihuy Store</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-400">${product.price}</p>
        </div>
      </div>
    </div>
  );
}