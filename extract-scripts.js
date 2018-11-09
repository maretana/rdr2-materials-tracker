////////////////////////////////////////////////////////////////////////////////
////////// Garment Sets
////////////////////////////////////////////////////////////////////////////////
let parseIngredients = ingredientText => {
  let regex = /(\D+) (x(\d+))?/g
  let ingredientsArray = [];
  while ((match = regex.exec(ingredientText)) !== null) {
    ingredientsArray.push({
      name: match[1].trim(),
      quantity: parseInt(match[3] || "1")
    })
  }
  return ingredientsArray
}

let z = Array.from(document.querySelectorAll('table')).map(table => {
  return Array.from(table.querySelectorAll('tr')).map((recipe, index) => {
    if (index === 0) return null
    var recipeData = recipe.querySelectorAll('td')
    return {
      name: recipeData[0].innerText.trim(),
      ingredients: parseIngredients(recipeData[1].innerText.trim()),
      _cost: parseFloat(recipeData[2].innerText.replace('$',''))
    }
  })
})

////////////////////////////////////////////////////////////////////////////////
////////// Clothing
////////////////////////////////////////////////////////////////////////////////
let parseMaterials = materialsText => {
  let regex = /(\d+)x (\D+)/g
  let materialsArray = [];
  while ((match = regex.exec(materialsText)) !== null) {
    materialsArray.push({
      name: match[2].trim(),
      quantity: parseInt(match[1] || "1")
    })
  }
  return materialsArray
}

let getClothingArray = table => Array.from(table.querySelectorAll('tr')).splice(1).map(
  row => {
    let rowData = Array.from(row.querySelectorAll('td'))
    return {
      name: rowData[0].innerText.trim(),
      ingredients: parseMaterials(rowData[1].innerText.trim().replace(',','')),
      _cost: parseFloat(rowData[2].innerText.replace('$',''))
    }
  }
)

let z = getClothingArray($0)
