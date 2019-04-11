import React, { Component } from "react"; 
import api from "../../services/api";
import "./style.css";
import {Link} from 'react-router-dom';
//console.log(api[0])

export default class Main extends Component {

    //armazenando os produtos
    state = {
    products: [], //lista de produtos
    productInfo: {}, //informacoes
    page: 1,
    };

    componentDidMount() {
       this.loadProducts();
    }
    //CARREGANDO PRODUTO
    loadProducts = async (page = 1) => {
        //backticks (`)
        const response = await api.get(`products?page=${page}`);

        const {docs, ...productInfo} = response.data;
        //PREENCHENDO A VARIAVEL DE PRODUCTS
        this.setState({products: docs, productInfo, page});

        //console.log(response.data.docs);
    };
    
    //paginas anteriores
    prevPage = () =>{
        const { page, productInfo } = this.state;

        if( page === 1) return;
        
        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }
    //proxima pagia
    nextPage = () => {
        const { page, productInfo } = this.state;
       
        if( page === productInfo.pages) return;
        
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    
    render(){
        //processo de desestruturacao
        const {products, page, productInfo} = this.state; 
      //  return <h1>Contagem de produtos: {this.state.products.length}</h1> // contar
      return (
          // percorrendo a lista de produtos do state
          <div className="product-list">

          {products.map(product => (
             //toda vez que adicionar um map o primeiro produto tem que conter uma key  
             
              <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <Link to={`/products/${product._id}` }>Acesso</Link>
              </article>

          ))}

          <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
          Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
          Proximo
          </button>
          </div>
          </div>

         
      );
    }
}