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

////////////////////////////////////////////////////////////////////////////////
////////// Camp Upgrades
////////////////////////////////////////////////////////////////////////////////
let parseMaterials = materialsText => {
  let regex = /(\d+)\s?x (\D+)/g
  let materialsArray = [];
  while ((match = regex.exec(materialsText)) !== null) {
    materialsArray.push({
      name: match[2].trim(),
      quantity: parseInt(match[1] || "1")
    })
  }
  return materialsArray
}

let getCampUpgradeArray = table => Array.from(table.querySelectorAll('tbody tr')).map(
  row => {
    let rowData = Array.from(row.querySelectorAll('td'))
    return {
      name: rowData[0].innerText.trim(),
      ingredients: parseMaterials(rowData[3].innerText.trim().replace('.','')),
      _cost: 0
    }
  }
)
let z = Array.from(document.querySelectorAll('table')).map(table => getCampUpgradeArray(table))
copy(z)

////////////////////////////////////////////////////////////////////////////////
////////// Satchel
////////////////////////////////////////////////////////////////////////////////
let parseMaterials = materialsText => {
  let regex = /(\d+)\s?x (\D+)/g
  let materialsArray = [];
  while ((match = regex.exec(materialsText)) !== null) {
    materialsArray.push({
      name: match[2].trim(),
      quantity: parseInt(match[1] || "1")
    })
  }
  return materialsArray
}

let getCampUpgradeArray = table => Array.from(table.querySelectorAll('tbody tr')).map(
  row => {
    let rowData = Array.from(row.querySelectorAll('td'))
    return {
      name: rowData[0].innerText.trim(),
      ingredients: parseMaterials(rowData[4].innerText.trim().replace('.','')),
      _cost: 0
    }
  }
)
let z = getCampUpgradeArray(document.querySelector('table'))
copy(z)

////////////////////////////////////////////////////////////////////////////////
////////// Localize
////////////////////////////////////////////////////////////////////////////////
String.prototype.toCamelCase = function() {
  return this.replace(/'/g, '').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  })
}

let localizeNames = (jsonTree, locale) => {
  let queue = [...jsonTree.ingredients]
  const prefix = jsonTree.name.toCamelCase()
  locale[prefix] = { name: jsonTree.name }
  jsonTree.name = `${prefix}.name`

  while (queue.length) {
    const node = queue.shift()
    const name = node.name.toCamelCase()
    if (node.ingredients) {
      locale[prefix][name] = node.name
      node.name = `${prefix}.${name}`
      queue = [...queue, ...node.ingredients]
    } else {
      locale.materials[name] = node.name
      node.name = `materials.${name}`
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
////////// Material Keys
////////////////////////////////////////////////////////////////////////////////
let addMaterialKeys = (jsonTree) => {
  let queue = [jsonTree]
  while (queue.length) {
    const node = queue.shift()
    if (node.ingredients) {
      queue = [...queue, ...node.ingredients]
    } else {
      node.key = node.name.replace('materials.', '')
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
////////// Materials Consolidated List
////////////////////////////////////////////////////////////////////////////////
let updateMaterialsList = (shop, materialsList) => {
  let shopKey = shop.shopKey
  let queue = [...shop.ingredients]
  while (queue.length) {
    const node = queue.shift()
    if (node.ingredients) {
      queue = [...queue, ...node.ingredients]
    } else {
      let material = materialsList.find(material => material.key === node.key)
      if (material) {
        material.quantity[shopKey] = (material.quantity[shopKey] || 0) + node.quantity
      } else {
        material = { key: node.key, name: node.name, quantity: {} }
        material.quantity[shopKey] = node.quantity
        materialsList.push(material)
      }
    }
  }
}

/**
 * Deletes the quantity prop and creates the shops array
 */
let mapMaterialQuantities = (materialsList) => {
  materialsList.forEach(material => {
    let quantities = Object.keys(material.quantity)
    material.shops = quantities.map(shop => {
      return {
        name: `${shop}.name`,
        key: shop,
        quantity: material.quantity[shop]
      }
    })
    delete material.quantity
  })
}
