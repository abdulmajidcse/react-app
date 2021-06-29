import CategoryList from "../../components/CategoryList";
import { Link } from 'react-router-dom';

function CategoryIndex() {
    return (
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <h4>Catgory List</h4>
              </div>
              <div className="col-md-6">
                <Link to="/categories/create" className="btn btn-sm btn-primary">New Category</Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <CategoryList />
          </div>
        </div>
    );
}

export default CategoryIndex;