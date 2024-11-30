document.addEventListener("DOMContentLoaded", () => 
{
    const form = document.getElementById("guestBookForm");
    const entriesList = document.getElementById("entriesList");
    const starRating = document.getElementById("starRating");
    const ratingInput = document.getElementById("rating");
    const optionsSelect = document.getElementById("options");

    starRating.addEventListener("click", (e) => 
    {
        if (e.target.tagName === "SPAN") 
        {
            const stars = Array.from(starRating.children);
            const selectedValue = e.target.getAttribute("data-value");

            // Reset stars
            stars.forEach((star) => 
            {
                star.classList.remove("selected");
            });
            e.target.classList.add("selected");

            // Change the color of stars
            stars.forEach((star) => 
            {
                if (star.getAttribute("data-value") <= selectedValue) 
                {
                    star.style.color = "black"; // turn star black
                } else 
                    {
                        star.style.color = "#ccc"; // turn Unselected stars gray
                    }
            });

            // Add star value
            ratingInput.value = selectedValue;
        }
    });

    form.addEventListener("submit", function (e) 
    {
        e.preventDefault(); // Prevent From Refresh Lost

        // Input From Form
        const name = document.getElementById("name").value.trim();
        const comments = document.getElementById("comments").value.trim();
        const rating = ratingInput.value;
        const selectedOption = optionsSelect.value;

        //Data Validation
        if (!name) 
        {
            alert("กรุณากรอกชื่อของคุณ");
            return;
        }
        if (!comments) 
        {
            alert("กรุณากรอกความคิดเห็นของคุณ");
            return;
        }
        if (!rating || rating < 1 || rating > 5) 
        {
            alert("กรุณาให้คะแนนระหว่าง 1 ถึง 5");
            return;
        }
        if (!options) 
        {
            alert("กรุณาเลือกประเภทของความคิดเห็น");
            return;
        }

        const newEntry = document.createElement("li");
        newEntry.innerHTML = `
        <strong>${name}</strong> (${selectedOption}) - <em>${rating} Stars</em>
        <p>${comments}</p>
        `;
        entriesList.appendChild(newEntry);

        form.reset();
        ratingInput.value = "0"; // Reset Star Point

        // Reset star point
        const stars = Array.from(starRating.children);
        stars.forEach((star) => 
            {
            star.style.color = "#ccc"; // Reset color
            star.classList.remove("selected"); // Remove the selected class from stars
        });
    });
});
let myBtt = document.getElementById("btt");
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        myBtt.style.display = "block";
    }else {
        myBtt.style.display = "none";
    }

}
window.onscroll = function(){
    scrollFunction();
}
function backToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}