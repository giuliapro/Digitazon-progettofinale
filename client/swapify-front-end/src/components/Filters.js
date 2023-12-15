import React from "react";

function Filters({ currentFilter, setCurrentFilter }) {
    const handleFilterClick = (filter) => {
        setCurrentFilter(filter);
    };

    return (
        <div className="filters-wrap-all">
            <div className="filters-wrap">
                <button
                    className={`filters ${currentFilter === 'Tutte le categorie' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick('Tutte le categorie')}>
                    Tutte le categorie
                </button>
                <button
                    className={`filters ${currentFilter === 'Abbigliamento' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Abbigliamento")}>
                    Abbigliamento
                </button>
                <button
                    className={`filters ${currentFilter === 'Libri' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Libri")}>
                    Libri
                </button>
                <button
                    className={`filters ${currentFilter === 'Altro' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Altro")}>
                    Altro
                </button>
                <button
                    className={`filters ${currentFilter === 'Accessori' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Accessori")}>
                    Accessori
                </button>
                <button
                    className={`filters ${currentFilter === 'Informatica' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Informatica")}>
                    Informatica
                </button>
                <button
                    className={`filters ${currentFilter === 'Mobili' ? 'selected' : ''}`}
                    onClick={() => handleFilterClick("Mobili")}>
                    Mobili
                </button>
            </div>

        </div>
    )
}

export default Filters;
