import React, {Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://e7.pngegg.com/pngimages/943/264/png-clipart-goods-and-services-tax-business-shower-information-add-to-cart-button-miscellaneous-blue.png" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;