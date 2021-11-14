import { useState } from 'react';
import { getSearchMovies } from '../../services/MoviesApi';
import style from './SearchForm.module.css'



const SearchForm = ({history, match, getSearchMovie}) => {
    const [search, setSearch] = useState("")
    const onHandleChange = (e) => {
        setSearch(e.target.value)
    }
    const onHandleSubmit = async (e) =>{
        e.preventDefault()
        const data = await getSearchMovies(search)
        history.push(match.url + `?query=${search}`)
        console.log(history)
        getSearchMovie(data)
        setSearch("")
    }
    return (
        <>
        <form className={style.form} onSubmit={onHandleSubmit}>
            <label className={style.label}>
                <input 
                    className={style.formInput}
                    type="text"
                    placeholder="Search movies"
                    onChange={onHandleChange}
                    value={search}
                /> 
            </label>
            <button type="submit">Search</button>
        </form>
        </>
    );
}

export default SearchForm;