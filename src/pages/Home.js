import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { Hero } from '../components';

export const Home = () => {
  useTitle('Home');

  const products = [
    { id: 1, name: 'Soundzy Earpiece Revolve XR', price: 2300, img: '/assets/images/prod10.png' },
    { id: 2, name: 'Sony Funk Earpiece 2XRZ', price: 3900, img: '/assets/images/prod11.png' },
    { id: 3, name: 'Bose QuietComfort Earbuds X', price: 5900, img: '/assets/images/prod12.png' },
    { id: 4, name: 'Soundzy Headphone Vibe 9X', price: 3500, img: '/assets/images/prod4.png' },
    { id: 5, name: 'Portronics Earpod RRZ113', price: 2200, img: '/assets/images/prod5.png' },
    { id: 6, name: 'Soundzy Earpod 39XXBZ', price: 2500, img: '/assets/images/prod6.png' },
    { id: 7, name: 'Boat Earpod Euphoria 70R', price: 6500, img: '/assets/images/prod7.png' },
    { id: 8, name: 'OnePlus Buds Pro X', price: 4500, img: '/assets/images/prod8.png' },
    { id: 9, name: 'Sony Earpods 201', price: 4900, img: '/assets/images/prod9.png' },
    { id: 10, name: 'JBL Headphone 2030R', price: 5000, img: '/assets/images/prod1.png' },
    { id: 11, name: 'Bose Headphone 3030X', price: 3000, img: '/assets/images/prod2.png' },
    { id: 12, name: 'Sony Headphone 20302', price: 5500, img: '/assets/images/prod3.png' }
  ];

  return (
    <>
      <Hero />
      <main>
        <p className="ourProd">Our Products</p>
        <section className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
};
