import './SearchBar.scss'

import LocationIcon from '../../assets/icons/location-icon.png'
import SearchIcon from '../../assets/icons/search-icon.png'

const SearchBar = () => 
{

    return (
        <>
            <div className="search-bar_wrapper">
                <div className="input_wrapper">
                    <img src={LocationIcon} alt="Location icon" className='location-icon'/>
                    <input type="text" placeholder='London...' />
                </div>
                <div className='search-icon_wrapper'>
                    <img src={SearchIcon} alt="Search icon" className='search-icon'/>
                </div>
            </div>
        </>
    )
}

export default SearchBar 