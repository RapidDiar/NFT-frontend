import React, { Component } from "react";
import { Form, Input } from "antd";

export class Search extends Component {
  render() {
    return (
      <Form>
        <Form.Item label="Поиск">
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

export default Search;
