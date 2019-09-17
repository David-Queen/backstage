import React, {Component} from 'react';
import {Form} from 'antd';

@Form.create()
class DelCategoryForm extends Component {
    render() {

        const {getFieldDecorator} = this.props.form;

        return <Form>
            <Form.Item label="分类名称">
                {
                    getFieldDecorator(
                        'categoryName', {
                            rules: []
                        }
                    )
                }
            </Form.Item>
        </Form>;
    }
}

export default DelCategoryForm;