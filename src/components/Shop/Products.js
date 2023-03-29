import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: "oye 1st",
    description: 'oyeeeeeeee'
  },
  {
    id: 'p2',
    price: 2,
    title: 'oye 2nd',
    description: 'oyeeeeee2'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          key= {product.id}
          id= {product.id}
          title={product.title}
          price={product.price}
          description= {`${product.description} ' - amazing!'`}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
