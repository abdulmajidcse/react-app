import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Table } from 'react-bootstrap';
import Loading from '../components/Loading';
import Api from '../config/Api';
import Swal from 'sweetalert2';
import { getToken } from '../utils/token';

class Category extends React.Component {
    state = {
        categories: [],
        loading: true,
    };

    getCategories() {
        Api.get(`/categories?token=${getToken()}`)
        .then(response => {
          this.setState({
            categories: response.data.data,
            loading: false, 
          });
        })
        .catch(() => {
            Swal.fire('', 'Something went wrong!', 'error');
            this.setState({
                loading: false, 
              });
        });
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        const { categories } = this.state;

        const categoryList = categories.map((category, index) => 
            <tr key={category.id}>
                <td>{++index}</td>
                <td>{category.name}</td>
                <td>
                    <Link className="btn btn-sm btn-primary"  to="/">Edit</Link>
                    <button type="button" className="btn btn-sm btn-danger"  onClick={() => alert('delete')}>Delete</button>
                </td>
            </tr>
        );

        const { loading } = this.state;
        return (
            <>
                <Container className="mt-3">
                    <Loading show={loading} />
                    <Card className="rounded-0 my-3">
                        <Card.Header>
                            <Card.Title>
                                <span>Category List</span>
                                <Link to="/" className="btn btn-sm btn-primary ms-2">Add New</Link>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categoryList}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Category;