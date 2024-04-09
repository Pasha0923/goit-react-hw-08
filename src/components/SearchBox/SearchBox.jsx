import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const onFilter = (e) => dispatch(setFilter(e.target.value));

  return (
    <div className={css.searchWrapper}>
      <p className={css.searchText}>Search by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        // Якщо форма контрольована то треба підв'язати інпути до того що в state
        value={filter} // value записуємо значення filter зі state
        // onChange={(e) => dispatch(changeFilter(e.target.value))}
        onChange={onFilter}
      />
      <span className={css.icon}>
        <FcSearch />
      </span>
    </div>
  );
};

export default SearchBox;
