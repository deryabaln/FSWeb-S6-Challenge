import React, { useState } from "react";

const Search = (props) => {
    const { data, setData } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData)
        setSearchTerm(e.target.value);
    };

    return (
        <input style={{ width: '40%', margin: '3% auto', textAlign: 'center', backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }} type="text" placeholder="Karakter Ara" value={searchTerm} onChange={handleSearch} />
    )
}
export default Search