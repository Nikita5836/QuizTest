export const getData = async () => {
	try {
		const responce = await fetch('/db.json')

		if (!responce.ok) {
			throw new Error('Данные не загрузились')
		}

		const data = await responce.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
