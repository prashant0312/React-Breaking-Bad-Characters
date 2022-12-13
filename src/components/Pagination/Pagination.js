import "../Pagination/PaginationStyle.css";

const Pagination = ({ charsPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="active">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
