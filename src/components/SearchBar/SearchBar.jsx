import s from './SearchBar.module.css';

const SearchBar = ({ setQuery }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value.trim();
        if (!query) {
            return;
        }

        setQuery(query);
        form.reset();
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='query'
                    className={s.input}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                />
                <button className={s.btn}>
                    Search
                </button>
            </form>
        </div>
    )
};

export default SearchBar;