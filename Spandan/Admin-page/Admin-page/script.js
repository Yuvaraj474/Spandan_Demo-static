function toggleCategory(categoryId) {
    const content = document.getElementById(categoryId);
    const arrow = document.getElementById('arrow-' + categoryId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    } else {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
}
