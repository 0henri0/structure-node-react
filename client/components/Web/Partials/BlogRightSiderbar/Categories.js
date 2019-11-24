
const Categories = ({category}) => {
  return (
    <>
      <li>
        <a href="#" className="d-flex justify-content-between">
            <p>{category.name}</p>
            <p>{category._id.substr(20)}</p>
        </a>
      </li>
    </>
  );
}

export default Categories;