//product-item-card holds info for image,price, fontawseome icons

import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const Card = ({ data }) => {
  return (
    <div className=" product-item-card">
      <a href={data.id}>
        <div>
          <img
            className="img-card"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="card-name">
          <div className="d-flex">
            <p className="product-name">{data.name}</p>       
            <p className="product-price">{data.price}</p>
           
          </div>
          <div className="d-flex">  
            <p className="">
              <FontAwesomeIcon icon={faHeart} />
            </p>
            <p className="">
              <FontAwesomeIcon icon={faCartShopping} />
            </p>
          </div>
        </div>
      </a>

    </div>
  )
}
