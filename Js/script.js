//Postagens
const Blog = async () => {
    const URL= "https://api-rest-post-diegocandido.herokuapp.com/postagens/";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const IMGSrc= "https://api-rest-post-diegocandido.herokuapp.com/postagens/4";
    const title = document.getElementById("card-title").innerHTML = data[0].title;
    const postDate = document.getElementById("postDate").innerHTML = "Postado por " + data[0].profileName + " em " + data[0].postDate;
    const title2 = document.getElementById("card-title2").innerHTML = data[1].title;
    const postDate2 = document.getElementById("postDate2").innerHTML = "Postado por " + data[1].profileName + " em " + data[1].postDate;
    const title3 = document.getElementById("card-title3").innerHTML = data[2].title;
    const postDate3 = document.getElementById("postDate3").innerHTML = "Postado por " + data[2].profileName + " em " + data[2].postDate;
    const title4 = document.getElementById("card-title4").innerHTML = data[3].title;
    const postDate4 = document.getElementById("postDate4").innerHTML = "Postado por " + data[3].profileName + " em " + data[3].postDate;
    const title5 = document.getElementById("card-title5").innerHTML = data[4].title;
    const postDate5 = document.getElementById("postDate5").innerHTML = "Postado por " + data[4].profileName + " em " + data[4].postDate;
    let img5 = `https://api-rest-post-diegocandido.herokuapp.com${data[4].thumbImage}`;
    const imagem5 = document.getElementById("card-img-top5").src = img5;
    const title6 = document.getElementById("card-title6").innerHTML = data[5].title;
    const postDate6 = document.getElementById("postDate6").innerHTML = "Postado por " + data[5].profileName + " em " + data[5].postDate;
}

//Postagens Populares
async function fetchPopu(){
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/0";
    try{
        const response = await fetch(url);
        const data = await response.json();
        const title = document.getElementById("Popu");
        title.textContent = data.title;
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

async function fetchPopu2(){
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/1";
    try{
        const response = await fetch(url);
        const data = await response.json();
        const title = document.getElementById("Popu2");
        title.textContent = data.title;
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

async function fetchPopu3(){
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/2";
    try{
        const response = await fetch(url);
        const data = await response.json();
        const title = document.getElementById("Popu3");
        title.textContent = data.title;
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

fetchPopu3();
fetchPopu2();
fetchPopu();
Blog();