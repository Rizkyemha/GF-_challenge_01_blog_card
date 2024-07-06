// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge

const card = () => {
	return `
  <div class="card-container rounder">
    <div class="card-img-container">
      <img src='/img/spacejoy-YqFz7UMm8qE-unsplash.jpg' alt='card image' />
    </div>
    <div class="card-content">
      <div class="card-content-header">
        <div class="card-content-header-badge">
        <span>Interior</span>
        </div>
        <h3 class="card-content-header-title">Top 5 Living Room Inspirations</h3>
      </div>
      <div class="card-content-body">
        <p class="card-content-body-text">
          Curated vibrants colors for your living, make it pop & calm in the same time.
        </p>
        <div class="card-content-button-container">
        <a class="card-content-button-action" href="#">
          Read more
          <img src="/img/arrow-right-line.svg" alt="read more button arrow right line icon" class="button-read-more-image"/>
        </a>
        </div>
      </div>
    </div>
  </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root_container");
	root.innerHTML = card();
});
