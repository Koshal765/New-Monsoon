import React, { useEffect, useState } from "react";

const MyRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Load recipes from localStorage
  const loadRecipes = () => {
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(saved);
  };

  // Remove recipe
  const handleRemove = (id, dishName) => {
    const updated = savedRecipes.filter(
      (r) => r.id !== id && r.dishName !== dishName
    );
    setSavedRecipes(updated);
    localStorage.setItem("savedRecipes", JSON.stringify(updated));
    window.dispatchEvent(new Event("savedRecipesUpdated")); 
  };

  // nitial load + listen for updates
  useEffect(() => {
    loadRecipes();
    window.addEventListener("savedRecipesUpdated", loadRecipes);
    return () => window.removeEventListener("savedRecipesUpdated", loadRecipes);
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">SAVED RECIPES</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {savedRecipes.length === 0 ? (
          <p className="text-muted">No recipes saved yet.</p>
        ) : (
          savedRecipes.map((recipe, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow border-warning">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.dishName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{recipe.dishName}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <p>Link: <a href={recipe.link} target="_blank" rel="noopener noreferrer">{recipe.link}</a></p>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(recipe.id, recipe.dishName)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
