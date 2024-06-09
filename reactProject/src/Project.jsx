import { useState , useEffect } from "react";
import Frame from "./assets/Frame 24.svg";
import user from "./assets/fi-rs-user.svg";
import cart from "./assets/fi-rs-shopping-cart.svg"


const Project = () => {

    const [products , setProducts] = useState([]);
    const [loading , setLoading] =useState(false);
    const [addProductCount , setAddProductCount] = useState(0)

    // useEffect(())

    useEffect(() => {
        async function fetchProducts(){
            try {
                setLoading(true)
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            }catch (error) {
                console.error(error);
            }finally{
                setLoading(false)
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="site_container">
            <div className="headerSection">
                <header>
                    <h1 className="logo">LOGO</h1>
                    <nav>
                        <select name="" id="select">
                            <option value="">Categories</option>
                        </select>
                        <ul className="navUl">
                            <li>What's new</li>
                            <li>Sales</li>
                            <li>Help</li>
                        </ul>
                    </nav>
                    <div className="countSection">
                        <img className="search" src={Frame} alt="" />
                        <p className="text"><img src={user} alt="" /> Account </p>
                        <p className="text"><img src={cart} alt="" /> Cart <b>{addProductCount}</b></p>
                    </div>
                </header>
            </div>
            

            <div className="heroSection">
                <div className="heroSectionComponents">
                    <h1 className="heroH1">Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit.</h1>
                    <button className="heroBtn">Shop Now</button>
                </div>
            </div>

            {loading && <div className="loader"></div>}

            <div className="productsContainer">
                {products.map((p) => {
                    return(
                        <div className="card">
                            <img className="productImage" src={p.image} alt={p.title}/>
                            <div className="Prices">
                            <strong> {p.category}</strong>
                            <b> {`$${p.price}`} </b>
                            </div>
                            <p className="title">{p.title}</p>
                            <div className="stars">
                            <span>{"⭐".repeat(Math.round(p.rating.rate))}</span>
                            <p> ({p.rating.count}) </p>
                            </div>
                            <button onClick={() => setAddProductCount(addProductCount +1)} className="productBtn">Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Project;