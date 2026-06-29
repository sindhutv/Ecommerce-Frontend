import axios from "axios";

const deliveryOptions = [
  {
    id: "1",
    deliveryDate: "Tuesday, June 21",
    priceString: "FREE Shipping"
  },
  {
    id: "2",
    deliveryDate: "Wednesday, June 15",
    priceString: "$4.99 - Shipping"
  },
  {
    id: "3",
    deliveryDate: "Monday, June 13",
    priceString: "$9.99 - Shipping"
  }
];

export function DeliveryOptions({
  cartItem,
  loadCart
}) {

  const updateDeliveryOption = async (deliveryOptionId) => {

    await axios.put("/api/cart-items", {
      productId: cartItem.productId,
      deliveryOptionId
    });

    await loadCart();
  };

  return (
    <div className="delivery-options">

      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      {deliveryOptions.map((deliveryOption) => {

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
          >

            <input
              type="radio"
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              checked={
                cartItem.deliveryOptionId === deliveryOption.id
              }
              onChange={() => {
                updateDeliveryOption(deliveryOption.id);
              }}
            />

            <div>
              <div className="delivery-option-date">
                {deliveryOption.deliveryDate}
              </div>

              <div className="delivery-option-price">
                {deliveryOption.priceString}
              </div>
            </div>

          </div>
        );
      })}

    </div>
  );
}