import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Spin, Row } from "antd";
import { connect } from "react-redux";
import { getDataNft } from "../redux";
import CardContent from "../components/CardContent";
import styles from "./Main.module.css";

function Main({ nft, getData }) {
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(nft);

  return (
    <Layout>
      <Button className={styles.addButton}>
        <Link to="/addNft">Добавить</Link>
      </Button>

      <Row gutter={16}>
        {nft.isLoading ? (
          <Spin />
        ) : (
          nft.data.map((item) => <CardContent key={item.id} props={item} />)
        )}
      </Row>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    nft: state.nft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getDataNft());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
