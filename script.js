async function fetchData() {
    const url1 = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&page=1";
    const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&page=2";
    const url3 = "https://api.themoviedb.org/3/discover/movie?api_key=7de76c4a00113596dceadece42dafe0f&page=3";
    let data;

    try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
        if (!response1.ok || !response2.ok || !response3.ok) {
            throw new Error(`HTTP error! status: ${response1.ok ? response2.status : response1.status}`);
        }
        const jsonData1 = await response1.json();
        const jsonData2 = await response2.json();
        const jsonData3 = await response3.json();
        const jsonData = [...jsonData1.results, ...jsonData2.results];
        data = jsonData;
        data2 = jsonData3.results.slice(0,6);
    } catch (error) {
        console.error("Error fetching data:", error);
        return;
    }

    displayResults(data);
    displayResults1(data2);
}

fetchData();

function displayResults(data) {
    const resultContainer = document.querySelector(".resultContainer");
    resultContainer.innerHTML = "";

    data.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <img class="bappamLogo" src="https://imgs.search.brave.com/qR-dwWDdULkqN-5MZYzxi1ANzIDhVKGmyzf9Yu86oLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYm8tYXdz/LXMzLWVhc3QtYnVj/a2V0LmtleWNkbi5s/aW5rL2ltYWdlcy9s/b2dvLnBuZz93PTc4/MCZzc2w9MQ" alt="Logo"></img>
            <img class="poster" src="https://image.tmdb.org/t/p/original${result.poster_path}" alt="${result.original_title} poster"></img>
            <h5>${result.original_title}</h5>
            <p>${result.release_date.substring(0, 4)}</p>
        `;

        resultContainer.append(resultDiv);
    });
}
function displayResults1(data) {
    const resultContainer2 = document.querySelector(".resultContainer2");

    data.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <img class="bappamLogo" src="https://imgs.search.brave.com/qR-dwWDdULkqN-5MZYzxi1ANzIDhVKGmyzf9Yu86oLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYm8tYXdz/LXMzLWVhc3QtYnVj/a2V0LmtleWNkbi5s/aW5rL2ltYWdlcy9s/b2dvLnBuZz93PTc4/MCZzc2w9MQ" alt="Logo"></img>
            <img class="poster" src="https://image.tmdb.org/t/p/original${result.poster_path}" alt="${result.original_title} poster"></img>
            <h5>${result.original_title}</h5>
            <p>${result.release_date.substring(0, 4)}</p>
        `;

        resultContainer2.append(resultDiv);
    });
}

const search = document.querySelector(".search");
const input1 = document.querySelector(".input1");
const bars = document.querySelector(".bars");
const content1 = document.querySelector(".content1");

search.addEventListener("click", () => {
    if (input1.style.display === "none" || input1.style.display === "") {
        input1.style.display = "block";
        content1.style.display="none";
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else {
        input1.style.display = "none";
    }
});
bars.addEventListener("click", () => {
    if (content1.style.display === "none" || content1.style.display === "") {
        content1.style.display = "block";
        bars.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        input1.style.display = "none";
    } else {
        content1.style.display = "none";
        bars.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
});