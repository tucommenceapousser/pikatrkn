document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Tribute to Fighters for a Better World";
    contentDiv.appendChild(heading);

    
    const explanationHeading = document.createElement("h2");
    explanationHeading.textContent = "What is a Hacktivist?";
    explanationHeading.style.color = "#00ff00";
    explanationHeading.style.textShadow = "0 0 5px #ff00ff, 0 0 10px #ff00ff";
    contentDiv.appendChild(explanationHeading);

    const hacktivistExplanation = document.createElement("p");
    hacktivistExplanation.className = "explanation";
    hacktivistExplanation.textContent = "A hacktivist is someone who uses technology to promote political ends. They leverage their skills to disrupt systems and platforms they see as unethical or corrupt.";
    contentDiv.appendChild(hacktivistExplanation);

    const anonymousExplanation = document.createElement("p");
    anonymousExplanation.className = "explanation";
    anonymousExplanation.textContent = "Anonymous is a decentralized international activist and hacktivist collective and movement. It is known for its various cyber attacks against several governments, institutions, and corporations.";
    contentDiv.appendChild(anonymousExplanation);
});