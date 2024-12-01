document.addEventListener("DOMContentLoaded", () => 
     {
         const form = document.getElementById("guestBookForm"); // กำหนดตัวแปรเพื่อเข้าถึงฟอร์ม
         const entriesList = document.getElementById("entriesList"); // กำหนดตัวแปรเพื่อเข้าถึงรายการความคิดเห็น
         const starRating = document.getElementById("starRating"); // กำหนดตัวแปรเพื่อเข้าถึงกลุ่มดาวสำหรับการให้คะแนน
         const ratingInput = document.getElementById("rating"); // กำหนดตัวแปรเพื่อเข้าถึง input สำหรับคะแนน
         const optionsSelect = document.getElementById("options"); // กำหนดตัวแปรเพื่อเข้าถึงตัวเลือกประเภทความคิดเห็น
         const hamburger = document.getElementById("hamburger");
         const mobileMenu = document.getElementById("mobileMenu");

         hamburger.addEventListener("click", () => {
             mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
         });
    
         document.addEventListener("click", (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.style.display = "none";
            }
         });

         // ฟังค์ชันจัดการการคลิกที่ดาวสำหรับให้คะแนน
         starRating.addEventListener("click", (e) => 
         {
             if (e.target.tagName === "SPAN") // ตรวจสอบว่าคลิกที่ <span> หรือไม่
             {
                 const stars = Array.from(starRating.children); // แปลงเด็กทั้งหมดใน starRating เป็น array
                 const selectedValue = e.target.getAttribute("data-value"); // รับค่าคะแนนจาก attribute data-value
    
                 // รีเซ็ตดาวทั้งหมด
                 stars.forEach((star) => 
                 {
                     star.classList.remove("selected"); // ลบคลาส 'selected' ออกจากทุกๆ ดาว
                 });
                 e.target.classList.add("selected"); // เพิ่มคลาส 'selected' ที่ดาวที่เลือก
     
                 // เปลี่ยนสีของดาว
                 stars.forEach((star) => 
                 {
                     if (star.getAttribute("data-value") <= selectedValue) 
                     {
                         star.style.color = "black"; // เปลี่ยนสีดาวที่เลือกเป็นสีดำ
                     } else 
                     {
                         star.style.color = "#ccc"; // เปลี่ยนสีดาวที่ไม่เลือกเป็นสีเทา
                     }
                 });
     
                 // เพิ่มค่าคะแนนลงใน input
                 ratingInput.value = selectedValue;
             }
         });
    
         // ฟังค์ชันจัดการการส่งฟอร์ม
         form.addEventListener("submit", function (e) 
         {
             e.preventDefault(); // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้าจอ
     
             // รับค่าจากฟอร์ม
             const name = document.getElementById("name").value.trim(); // ชื่อ
             const comments = document.getElementById("comments").value.trim(); // ความคิดเห็น
             const rating = ratingInput.value; // คะแนนจาก input
             const selectedOption = optionsSelect.value; // ประเภทความคิดเห็นที่เลือก
     
             // การตรวจสอบข้อมูลที่กรอก
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
             if  (!rating || rating < 1 || rating > 5) 
             { 
                 alert("กรุณาให้คะแนนระหว่าง 1 ถึง 5");
                 return;
             }
             if (!options) 
             {
                alert("กรุณาเลือกประเภทของความคิดเห็น");
                return;
             }
    
             // สร้างรายการใหม่เพื่อแสดงในหน้าจอ
             const newEntry = document.createElement("li");
             newEntry.innerHTML = ` 
             <strong>${name}</strong> (${selectedOption}) - <em>${rating} Stars</em> 
             <p>${comments}</p>
             `;
             entriesList.appendChild(newEntry); // เพิ่มรายการใหม่ลงในรายการความคิดเห็น
    
             // รีเซ็ตฟอร์ม
             form.reset();
             ratingInput.value = "0"; // รีเซ็ตค่าคะแนน
    
             // รีเซ็ตดาว 
             const stars = Array.from(starRating.children);
             stars.forEach((star) => 
             {
                 star.style.color = "#ccc"; // รีเซ็ตสีของดาว
                 star.classList.remove("selected"); // ลบคลาส 'selected' ออกจากทุกๆ ดาว
             });
         });
     });
    
     // ฟังก์ชันจัดการการแสดงปุ่มกลับไปด้านบน
     let myBtt = document.getElementById("btt"); 
     function scrollFunction() {
         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
             myBtt.style.display = "block"; // แสดงปุ่มกลับไปด้านบนเมื่อเลื่อนลงมามากกว่า 50px
         } else {
             myBtt.style.display = "none"; // ซ่อนปุ่มกลับไปด้านบนเมื่อเลื่อนกลับขึ้นไป
         }
     }
    
     // ฟังก์ชันให้ทำงานเมื่อมีการเลื่อนหน้าจอ
     window.onscroll = function(){
         scrollFunction();
     }
    
     // ฟังก์ชันกลับไปด้านบน
     function backToTop(){
         document.documentElement.scrollTop = 0; // เลื่อนหน้าจอไปที่ตำแหน่งบนสุด
         document.body.scrollTop = 0; // เลื่อนหน้าจอไปที่ตำแหน่งบนสุด
     }
    