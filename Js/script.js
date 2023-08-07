async function fetchAndRenderData() {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/0";
    try {
        const response = await fetch(url);
        const data = await response.json();
        //const thumbImage = data.thumbImage;
        //document.getElementById("card-img-top").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title");
        title.textContent = data.title;
        const description = document.getElementById("card-text");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchAndRender2Data() {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/1";
    try {
        const response = await fetch(url);
        const data = await response.json();
        //const thumbImage = data.thumbImage;
        //document.getElementById("card-img-top2").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title2");
        title.textContent = data.title;
        const description = document.getElementById("card-text2");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate2");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchAndRender3Data() {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/2";
    try{
        const response = await fetch(url);
        const data = await response.json();
        //const thumbImage = data.thumbImage;
        //document.getElementById("card-img-top3").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title3");
        title.textContent = data.title;
        const description = document.getElementById("card-text3");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate3");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

async function fetchAndRender4Data() {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/3";
    try {
        const response = await fetch(url);
        const data = await response.json();
        //const thumbImage = data.thumbImage;
        //document.getElementById("card-img-top4").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title4");
        title.textContent = data.title;
        const description = document.getElementById("card-text4");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate4");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchAndRender5Data() {
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/4";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const thumbImage = data.thumbImage;
        document.getElementById("card-img-top5").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title5");
        title.textContent = data.title;
        const description = document.getElementById("card-text5");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate5");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchAndRender6Data(){
    const url = "https://api-rest-post-diegocandido.herokuapp.com/postagem/5";
    try{
        const response = await fetch(url);
        const data = await response.json();
        //const thumbImage = data.thumbImage;
        //document.getElementById("card-img-top6").src = "https://api-rest-post-diegocandido.herokuapp.com"+thumbImage;
        const title = document.getElementById("card-title6");
        title.textContent = data.title;
        const description = document.getElementById("card-text6");
        description.textContent = data.description;
        const postDate = document.getElementById("postDate6");
        postDate.textContent = "Postado por " + data.profileName + " em " + data.postDate;
    } catch(error){
        console.error("Error fetching data:", error);
    }
}

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
fetchAndRender6Data();
fetchAndRender5Data();
fetchAndRender4Data();
fetchAndRender3Data();
fetchAndRender2Data();
fetchAndRenderData();