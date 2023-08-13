// import './category-item.styles.scss'

const Category = ({ title, image }) =>
<div className="category-container">
  <div className='background-image' style={{ backgroundImage: `url(${image})` }}></div>
  <div className="category-body-container">
    <h2>{title}</h2>
    <p>Shop Now</p>
  </div>
</div>

export default Category;