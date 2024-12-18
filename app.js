function generateRecommendation() {
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const resultDiv = document.getElementById("result");

  if (!question1 || !question2 || !question3) {
      resultDiv.style.display = "block";
      resultDiv.textContent = "Please answer all questions to get a recommendation!";
      resultDiv.classList.remove("show");
      setTimeout(() => {
          resultDiv.classList.add("show"); 
      }, 10);
      return;
  }

  let recommendation = "";

  
  if (!question1 || !question2 || !question3) {
    recommendation = "Please answer all questions to get a recommendation!";
  } else if (question1 === "Beach" && question2 === "Adventure" && question3 === "Low") {
    recommendation = "Try Goa, India! Perfect for thrilling water sports on a budget.";
  } else if (question1 === "Beach" && question2 === "Adventure" && question3 === "Medium") {
    recommendation = "We recommend a trip to the beautiful Bali, Indonesia! Enjoy white sandy beaches and thrilling water sports.";
  } else if (question1 === "Beach" && question2 === "Adventure" && question3 === "High") {
    recommendation = "Discover Queensland, Australia! Experience the Great Barrier Reef and premium water adventures.";
  } else if (question1 === "Beach" && question2 === "Relaxation" && question3 === "Low") {
    recommendation = "Relax at Gokarna, India! Enjoy peaceful beaches and serene vibes on a budget.";
  } else if (question1 === "Beach" && question2 === "Relaxation" && question3 === "Medium") {
    recommendation = "Unwind at Phuket, Thailand! Affordable luxury with stunning beaches and massages.";
  } else if (question1 === "Beach" && question2 === "Relaxation" && question3 === "High") {
    recommendation = "Relax luxuriously at the Maldives with stunning overwater villas and breathtaking views.";
  } else if (question1 === "Mountains" && question2 === "Adventure" && question3 === "Low") {
    recommendation = "Trek in the Western Ghats, India! Affordable and full of thrilling adventures.";
  } else if (question1 === "Mountains" && question2 === "Adventure" && question3 === "Medium") {
    recommendation = "Explore the Himalayan trails in Nepal! Perfect for moderate budgets and epic trekking experiences.";
  } else if (question1 === "Mountains" && question2 === "Adventure" && question3 === "High") {
    recommendation = "Climb Mount Kilimanjaro, Tanzania! A premium experience for adventure lovers.";
  } else if (question1 === "Mountains" && question2 === "Relaxation" && question3 === "Low") {
    recommendation = "Explore the serene beauty of Himachal Pradesh, India. Enjoy peaceful mountain views on a budget.";
  } else if (question1 === "Mountains" && question2 === "Relaxation" && question3 === "Medium") {
    recommendation = "Visit Darjeeling, India! Beautiful views of the Himalayas with affordable homestays.";
  } else if (question1 === "Mountains" && question2 === "Relaxation" && question3 === "High") {
    recommendation = "Relax in luxury at Aspen, Colorado! High-end resorts and stunning mountain scenery.";
  } else {
    recommendation = "Based on your preferences, we recommend exploring unique options tailored to your choice!";
  }


  
  resultDiv.style.display = "block";
  resultDiv.textContent = recommendation;
  resultDiv.classList.remove("show"); 
  setTimeout(() => {
      resultDiv.classList.add("show"); 
  }, 10);
}
