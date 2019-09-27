

const blogArea = ({ children, p = 'p_100' }) => {
  return (
    <section className={`blog_area ${p}`}>
      <div className="container">
        { children }
      </div>
    </section>
  );
};

export default blogArea;