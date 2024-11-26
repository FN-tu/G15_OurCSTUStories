document.addEventListener("DOMContentLoaded", () => 
{
    const form = document.getElementById("guestBookForm");
    const entriesList = document.getElementById("entriesList");

    form.addEventListener("submit", function (e) 
    {
        e.preventDefault(); // Prevent From Refresh Lost

        // Input From Form
        const name = document.getElementById("name").value.trim();
        const comments = document.getElementById("comments").value.trim();
        const rating = document.getElementById("rating").value;
        const options = document.getElementById("options").value;
    });
});