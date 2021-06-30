import React, { useState } from "react";
import { Layout, Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axiosInstance from "../axios/axiosApi";
import axios from "axios";

const AddNft = () => {
  const props = {
    action: "http://10.0.10.49:8000/account/api/NFT/",
    data: {},
    headers: {
      authorization: "JWT " + localStorage.getItem("accessToken"),
    },
  };

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [tags, setTags] = useState();

  const selectFile = (e) => {
    console.log(e);
    setImage(e.target.files);
  };

  // const normFile = (e) => {
  //   console.log(props);
  //   setImage(e.fileList[0]);
  // axios
  //   .post(
  //     "http://10.0.10.49:8000/account/api/NFT/",
  //     { image: image },
  //     {
  //       headers: {
  //         Authorization: "JWT " + localStorage.getItem("accessToken"),
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   )
  //   .then(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // };

  const form = new FormData();

  const onSubmit = () => {
    const currentImage = image[0];

    form.append("title", title);
    form.append("image", currentImage);
    form.append("price", price);
    form.append("tags", tags);
    form.append("owner", 1);

    console.log(form);

    axios
      .post("http://10.0.10.49:8000/account/api/NFT/", form, {
        headers: {
          Authorization: "JWT " + localStorage.getItem("accessToken"),
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json",
          // accept: "application/json",
        },
      })
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <Layout>
      <Form onFinish={onSubmit}>
        <Form.Item label="title" name="title">
          <Input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
        </Form.Item>
        <Form.Item label="price" name="price">
          <Input
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Input>
        </Form.Item>
        <Form.Item name="upload" label="Upload" valuePropName="fileList">
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
        </Form.Item>
        <Form.Item label="tags" name="tags">
          <Input
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default AddNft;
