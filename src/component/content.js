import React, { useState, useEffect, Fragment } from "react";
import { Button, Card, Row, Col, Icon } from "antd";

const { Meta } = Card;

export default function CartList(props) {
  const [addToCart, setAddToCart] = useState({
    list: props.list
  });

  return (
    <Fragment>
      {/* <Button onClick={() => props.update("Count")}>Click For Update</Button> */}

      <div style={{ direction: "rft" }}>
        {addToCart.list.map(item => (
          <Card
            hoverable
            actions={[
              <Icon
                type="shopping-cart"
                onClick={() => props.update({ item: item })}
              />
            ]}
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src={item.img} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
    </Fragment>
  );
}
