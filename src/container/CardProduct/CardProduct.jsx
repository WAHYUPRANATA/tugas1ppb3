import React, {Component} from "react";

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, ()=> {
            this.handleCounterChange(this.state.order);
        })

        this.handleCounterChange();
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, ()=> {
                this.handleCounterChange(this.state.order);
            })
        }

    }

    render(){
        return(
                <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://i.pinimg.com/564x/c0/4e/dc/c04edc8a052b7ba77edd9a01217a39ab.jpg" alt="product_image"/>
                </div>
                <p className="product-title">Jual Kucing Muka Ngeselin (Ready Banyak)</p>
                <p className="product-price">Rp 250.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus} >+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;