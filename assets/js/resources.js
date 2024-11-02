// Recursos para Funcionários e Gerentes
function loadInventory() {
    const inventoryList = document.getElementById('inventoryList');
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventoryList.innerHTML = inventory.map(item => 
        `<li>${item}</li>` // Removido o botão "Excluir" da lista do funcionário
    ).join('');
}

function addInventoryItem(itemName) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventory.push(itemName);
    localStorage.setItem('inventory', JSON.stringify(inventory));
    loadInventory();
}

function removeInventoryItem(index) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventory.splice(index, 1);
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Recursos para Gerentes
function loadManagerInventory() {
    const inventoryList = document.getElementById('inventoryList');
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventoryList.innerHTML = inventory.map((item, index) =>
        `<li>${item} <button class="limpar" onclick="removeManagerInventoryItem('${item}')">Excluir</button></li>`
    ).join('');
}

function updateManagerInventoryItem(oldName, newName) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const index = inventory.indexOf(oldName);
    if (index !== -1) {
        inventory[index] = newName;
        localStorage.setItem('inventory', JSON.stringify(inventory));
        loadManagerInventory();
    } else {
        alert("Item não encontrado.");
    }
}

function removeManagerInventoryItem(itemName) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const index = inventory.indexOf(itemName);
    if (index !== -1) {
        inventory.splice(index, 1);
        localStorage.setItem('inventory', JSON.stringify(inventory));
        loadManagerInventory();
    } else {
        alert("Item não encontrado.");
    }
}

// Recursos para Administradores
function loadAdminResources() {
    const adminResourceList = document.getElementById('adminResourceList');
    const adminResources = JSON.parse(localStorage.getItem('adminResources')) || [];
    adminResourceList.innerHTML = adminResources.map(item => `<li>${item}</li>`).join('');
}

function addAdminResource(resourceName) {
    const adminResources = JSON.parse(localStorage.getItem('adminResources')) || [];
    adminResources.push(resourceName);
    localStorage.setItem('adminResources', JSON.stringify(adminResources));
    loadAdminResources();
}

function updateAdminResource(oldName, newName) {
    const adminResources = JSON.parse(localStorage.getItem('adminResources')) || [];
    const index = adminResources.indexOf(oldName);
    if (index !== -1) {
        adminResources[index] = newName;
        localStorage.setItem('adminResources', JSON.stringify(adminResources));
        loadAdminResources();
    } else {
        alert("Recurso não encontrado.");
    }
}

function removeAdminResource(resourceName) {
    const adminResources = JSON.parse(localStorage.getItem('adminResources')) || [];
    const index = adminResources.indexOf(resourceName);
    if (index !== -1) {
        adminResources.splice(index, 1);
        localStorage.setItem('adminResources', JSON.stringify(adminResources));
        loadAdminResources();
    } else {
        alert("Recurso não encontrado.");
    }
}
