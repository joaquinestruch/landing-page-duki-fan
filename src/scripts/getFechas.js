export async function getFechas(){
    try {
        const res = await fetch('https://api-fechas-duki-bs4g.vercel.app/');
        const data = await res.json()
        return data; 

      } catch (error) {
        console.error('Error en la petición Fetch:', error);
      }
}; 