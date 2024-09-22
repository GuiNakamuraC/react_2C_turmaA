import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }){
    const [ favorite, setFavorite ] = useState([])

    return(
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook Personalizado
export function useFavoriteContext() {
	const { favorite, setFavorite }	 = useContext(FavoritesContext);

	function addFavorite(newFavorite) {

		// Verificar se tem item favorito repetido
		const repeatedFavorite = favorite.some(item => item.id === newFavorite.id);

		// Nova lista recebe lista anterior
		let newList = [...favorite]

		// Verificar se não tem repetido então adicione o item na lista de favoritos
		if(!repeatedFavorite) {
			newList.push(newFavorite)
			return setFavorite(newList) // Atualizar a lista
		}

		// Se for repetido ele vai ser tirado da lista
		newList = favorite.filter((fav) => fav.id !== newFavorite.id)

		// Nova lista atualizada
		return setFavorite(newList)

	}

	return {
		favorite,
		addFavorite
	}

}