export const getAPI = async () => {
    try {
        const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3d25c39f410b7b9ae95");
        return res.json();
    } catch (e) {
        alert("No se ha podido recuperar la información.")
    }
}