import React, { Component } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import Auth from "../modules/Auth";
let headers = { "Content-Type": "application/json" };
if (Auth.getToken()) {
  headers["Authorization"] = `Bearer ${Auth.getToken()}`;
}

const FormItem = Form.Item;

class UserSearch extends Component {
  handleSearch = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) return;

      this.props.showSearchLoading(true);
      fetch("/users/filter", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(fieldsValue)
      })
        .then(res => res.json())
        .then(data => {
          this.props.onSearchResults(data.data);
        })
        .catch(error => console.error(error));
    });
  };

  handleReset = e => {
    this.props.form.resetFields();
    this.handleSearch(e);
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form
        onSubmit={this.handleSearch}
        layout="inline"
        className="ant-advanced-search-form"
      >
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="User first name">
              {getFieldDecorator("firstName")(
                <Input placeholder="Search firstname" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col sm={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(UserSearch);
