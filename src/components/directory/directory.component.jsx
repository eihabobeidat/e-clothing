import '../../categories.styles.scss';
import Category from '../category-item/category-item.component';

const Directory = ({categories}) => {
    return (   <div className="categories-container">
    {categories.map(({ id, title, imageUrl }) => <Category key={id} title={title} image={imageUrl} />)}
  </div>);
}

export default Directory;