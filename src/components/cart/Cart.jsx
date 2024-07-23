import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Button, Card, Space } from 'antd';
import { deleteItem } from '../../feature/counter/cartSlice';
import { ImagePreview } from './preview/ImagePreview';
export const Cart = () => {
  const listItemCart = useSelector((state) => state.cart.cartTotal);
  const dispath = useDispatch();

  const deleteItemIndex = (index) => {
    console.log(index);
    dispath(deleteItem(index));
  };
  return (
    <section className="cartList">
      <Space direction="vertical" size={16}>
        {listItemCart.length > 0
          ? listItemCart.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  extra={<a href="#">More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <ImagePreview url={item.Img1} scale={200} />
                  <p>price: {item.price}</p>
                  <p>phone: {item.phone}</p>
                  <Button onClick={() => deleteItemIndex(index)}>
                    Delete item
                  </Button>
                </Card>
              );
            })
          : 'notthing item'}
      </Space>
    </section>
  );
};
