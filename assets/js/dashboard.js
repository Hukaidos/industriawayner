document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const userRole = document.getElementById('userRole');
    const content = document.getElementById('content');

    if (user) {
        userRole.textContent = user.nivel.charAt(0).toUpperCase() + user.nivel.slice(1);
        
        if (user.nivel === 'funcionario') {
            content.innerHTML = `
                <h2 class="titulo">Área de Funcionário</h2>
                <p>Alertas de segurança e acesso limitado ao inventário.</p>
                <h3>Funcionários so tem acesso a cadastrar itens</h3>
                <div class="caixafuncionario">
                    <input type="text" id="itemName" placeholder="Nome do Item" required>
                    <button id="addItem">Adicionar item</button>
                </div>
                <hr>
                <ul id="inventoryList"></ul>
            `;
            loadInventory();
        
            document.getElementById('addItem').addEventListener('click', () => {
                const itemName = document.getElementById('itemName').value.trim();
                if (itemName) {
                    addInventoryItem(itemName);
                    document.getElementById('itemName').value = "";
                    loadInventory();
                }
            });
        
        } else if (user.nivel === 'gerente') {
            content.innerHTML = `
                <h2>Área de Gerente</h2>
                <div class="app">
                    <div class="esquerdo">
                        <h3 class="subtitulo">Gerenciar Inventário</h3>
                        <label>Adicionar item</label>
                        <div class="adicionar">
                            <input type="text" id="managerItemName" placeholder="Nome do Item" />
                            <button id="managerAddItem">Adicionar</button>
                        </div>
                        <label>Atualizar Item</label>
                        <input type="text" id="updateItemName" placeholder="Nome do Item a ser Atualizado" />
                        <input type="text" id="newItemName" placeholder="Novo Nome do Item" />
                        <button id="updateItem">Atualizar Item</button>
                    </div>
                    <div class="direito">
                        <h3>Itens do inventário</h3>
                        <ul id="inventoryList"></ul> <!-- Alterado para usar a mesma lista -->
                    </div>
                </div>
            `;
            loadManagerInventory();

            document.getElementById('managerAddItem').addEventListener('click', () => {
                const itemName = document.getElementById('managerItemName').value;
                if (itemName) {
                    addInventoryItem(itemName);
                    document.getElementById('managerItemName').value = "";
                    loadManagerInventory();
                }
            });

            document.getElementById('updateItem').addEventListener('click', () => {
                const oldName = document.getElementById('updateItemName').value;
                const newName = document.getElementById('newItemName').value;
                updateManagerInventoryItem(oldName, newName);
            });
        } else if (user.nivel === 'admin') {
            content.innerHTML = `
                <h2>Área do Administrador</h2>
                <div class="app">
                    <div class="esquerdo">
                        <h3 class="subtitulo">Gerenciar Recursos de Segurança</h3>
                        <label>Adicionar Recurso</label>
                        <div class="adicionar">
                            <input type="text" id="adminResourceName" placeholder="Nome do Recurso" />
                            <button id="adminAddResource">Adicionar</button>
                        </div>
                        <label>Atualizar Recurso</label>
                        <input type="text" id="adminUpdateResourceName" placeholder="Nome do Recurso a ser Atualizado" />
                        <input type="text" id="adminNewResourceName" placeholder="Novo Nome do Recurso" />
                        <button id="adminUpdateResource">Atualizar Recurso</button>
                        <label>Remover Recurso</label>
                        <div class="remover">
                            <input type="text" id="adminRemoveResourceName" placeholder="Nome do Recurso a ser Removido" />
                            <button id="adminRemoveResource">Remover</button>
                        </div>
                    </div>
                    <div class="direito">
                        <h3>Recursos Disponíveis</h3>
                        <ul id="adminResourceList"></ul>
                    </div>
                </div>
            `;
            loadAdminResources();

            document.getElementById('adminAddResource').addEventListener('click', () => {
                const resourceName = document.getElementById('adminResourceName').value;
                addAdminResource(resourceName);
            });

            document.getElementById('adminUpdateResource').addEventListener('click', () => {
                const oldName = document.getElementById('adminUpdateResourceName').value;
                const newName = document.getElementById('adminNewResourceName').value;
                updateAdminResource(oldName, newName);
            });

            document.getElementById('adminRemoveResource').addEventListener('click', () => {
                const resourceName = document.getElementById('adminRemoveResourceName').value;
                removeAdminResource(resourceName);
            });
        }
    }

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});
