document.getElementById("bgButton").onclick = function() {
    document.body.style.backgroundColor = getRandomColor();
};

function getRandomColor() {
    const colors = ["lavender", "lightblue", "mistyrose", "lightyellow", "honeydew", "aliceblue"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// api call
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    // console.log(productList);
    fetch("https://fakestoreapi.com/products?limit=20")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                
                const productCard = document.createElement("div");
                productCard.style.border = "1px solid #ddd";
                productCard.style.borderRadius = "8px";
                productCard.style.padding = "10px";
                productCard.style.width = "200px";
                productCard.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
                productCard.style.textAlign = "center";
                productCard.style.backgroundColor = "#fff";

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px; object-fit: contain;">
                    <h4 style="font-size: 16px;">${product.title}</h4>
                    <p style="color:green;">₹${product.price}</p>
                `;
                productList.appendChild(productCard);
                //  console.log(product)
            }
        //  console.log(product)
        );
           
        })
        .catch(error => {
            console.error("Error loading products:", error);
            productList.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        });
        
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
