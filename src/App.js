import './App.css';
import { Pagination } from 'react-bootstrap';

function App() {
  return (
  <>
  <h3>Pagination Example Using ReactJs</h3>

      <Pagination>
          <Pagination.First/>
          <Pagination.Prev/>
          <Pagination.Item active onClick='#'>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item >{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item disabled>{11}</Pagination.Item>
          <Pagination.Next/>
          <Pagination.Last/>
      </Pagination>
  </>
  );
}

export default App;
