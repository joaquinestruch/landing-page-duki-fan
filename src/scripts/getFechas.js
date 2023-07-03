export async function getFechas(){
   
        const res = await fetch('https://api-fechas-duki-bs4g.vercel.app/');
        const data = await res.json()
        return data; 

     
}; 