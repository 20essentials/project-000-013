const d = document,
  $modal = d.querySelector(".modal");

d.addEventListener("click", (e) => {
  if (e.target.matches(".equis")) {
    if ($modal.classList.contains("aparecer")) {
      $modal.classList.remove("aparecer");
      $modal.classList.add("desaparecer");
    } else {
      $modal.classList.remove("desaparecer");
      $modal.classList.add("aparecer");
    }
  }
  if (e.target.matches(".item")) {
    let $valor = e.target.textContent,
      $img = $modal.querySelector("img");
    $img.src = `assets/fotos_with_reference_AVIF/img-${$valor}.avif`;

    console.log($valor);

    $modal.classList.toggle("aparecer");
  }
});
console.groupCollapsed("Reference: ")
console.log("img-1 ->", "https://wallhaven.cc/w/2k2gy9");
console.log("img-2 ->", "https://wallhaven.cc/w/396lmd");
console.log("img-3 ->", "https://wallhaven.cc/w/9mgjq1");
console.log("img-4 ->", "https://wallhaven.cc/w/0wv5xx");
console.log("img-5 ->", "https://wallhaven.cc/w/nzm8ky");
console.log("img-6 ->", "https://wallhaven.cc/w/ne83mo");
console.log("img-7 ->", "https://wallhaven.cc/w/zx1x1y");
console.log("img-8 ->", "https://wallhaven.cc/w/nzmqly");
console.log("img-9 ->", "https://wallhaven.cc/w/4g33dd");
console.log("img-10 ->", "https://wallhaven.cc/w/nmzox8");
console.log("img-11 ->", "https://wallhaven.cc/w/43yq6y");
console.log("img-12 ->", "https://wallhaven.cc/w/3kdvg6");
console.log("img-13 ->", "https://wallhaven.cc/w/p8d67m");
console.log("img-14 ->", "https://wallhaven.cc/w/nzw76y");
console.log("img-15 ->", "https://wallhaven.cc/w/73ewlo");
console.log("img-16 ->", "https://wallhaven.cc/w/4dm8oo");
console.log("img-17 ->", "https://wallhaven.cc/w/0pvog3");
console.log("img-18 ->", "https://wallhaven.cc/w/nrq25j");
console.log("img-19 ->", "https://wallhaven.cc/w/3k713v");
console.log("img-20 ->", "https://wallhaven.cc/w/4y3v6d");
console.log("img-21 ->", "https://wallhaven.cc/w/0j3lem");
console.log("img-22 ->", "https://wallhaven.cc/w/mdg3x1");
console.log("img-23 ->", "https://wallhaven.cc/w/gj2wge");
console.log("img-24 ->", "https://wallhaven.cc/w/j8em9w");
console.log("img-25 ->", "https://wallhaven.cc/w/4v7gxl");
console.groupEnd();

