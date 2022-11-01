import { useRouter } from "next/router"
import { useState } from "react"

export function useFavorite( ) {
    


	async function deleteFavRecipe(id: string) {
		const body = { id }
		await fetch('/api/recipe', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
		
	}

    return{
        deleteFavRecipe
    }
}