const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipeContainer = document.getElementById('recipeContainer');
const loading = document.getElementById('loading');

// Event listener saat tombol "Cari Resep" diklik
searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query !== "") {
        fetchRecipes(query);
    } else {
        alert("Masukkan nama makanan terlebih dahulu, sepuh!");
    }
});

// Event listener kalau user menekan tombol 'Enter' di keyboard
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Fungsi utama untuk Fetch data dari API TheMealDB
async function fetchRecipes(keyword) {
    // 1. Tampilkan loading spinner & bersihkan kontainer sebelumnya
    loading.classList.remove('d-none');
    recipeContainer.innerHTML = "";

    try {
        // 2. Melakukan Fetch ke API Publik (TheMealDB)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
        const data = await response.json();
        console.log(data);

        // 3. Sembunyikan loading
        loading.classList.add('d-none');

        // 4. Cek apakah resepnya ada atau tidak
        if (data.meals) {
            displayRecipes(data.meals);
        } else {
            recipeContainer.innerHTML = `
                <div class="col-12 text-center">
                    <p class="text-danger fs-5">Waduh, resep "${keyword}" tidak ditemukan! Coba kata kunci lain.</p>
                </div>
            `;
        }

    } catch (error) {
        loading.classList.add('d-none');
        console.error("Terjadi kesalahan:", error);
        recipeContainer.innerHTML = `<p class="text-center text-danger">Gagal mengambil data dari server!</p>`;
    }
}

// Fungsi untuk merender/menyuntikkan data ke DOM HTML
function displayRecipes(meals) {
    let cardsHTML = "";

    meals.forEach(meal => {
        cardsHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${meal.strMeal}</h5>
                        <p class="text-muted small mb-2">Kategori: <strong>${meal.strCategory}</strong> | Asal: <strong>${meal.strArea}</strong></p>
                        <p class="card-text text-truncate">${meal.strInstructions}</p>
                        <a href="${meal.strYoutube}" target="_blank" class="btn btn-outline-dark mt-auto btn-sm">Tonton Video Masak 📺</a>
                    </div>
                </div>
            </div>
        `;
    });

    // Suntikkan ke dalam DOM
    recipeContainer.innerHTML = cardsHTML;
}