const calculateCart = (items = []) => {

  let subTotal = 0;
  let discount = 0;

  items.forEach((item) => {

    const price = Number(item.product?.price || 0);

    const qty = Number(item.quantity || 0);

    const dis = Number(item.product?.discount || 0);

    subTotal += price * qty;

    discount += ((price * dis) / 100) * qty;
  });

  const deliveryFee = subTotal > 1000 ? 0 : 50;

  const finalTotal =
    subTotal - discount + deliveryFee;

  return {
    subTotal,
    discount,
    deliveryFee,
    finalTotal,
  };
};

export default calculateCart;