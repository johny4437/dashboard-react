import React from 'react';
import './style.css'

function Form() {
    return (
    
            <div className="form-box">
                <h3>Preço</h3>
                <form>
                    <input type="text" placeholder="insira um preço" id="price"/>
                   <button>Adicionar</button>
                </form>
               
            </div>
       
    )
}

export default Form;
