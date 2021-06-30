import React from "react";
import { Card, Col } from "antd";
import styles from "./CardContent.module.css";

const CardContent = (props) => {
  console.log(props.props.title);

  return (
    <Col span={4}>
      <Card
        cover={<img src={props.props.image} />}
        className={styles.card}
        key={props.props.id}
        title={props.props.title}
      >
        <p>{props.props.price}</p>
        <p>{props.props.tags}</p>
      </Card>
    </Col>
  );
};

export default CardContent;
