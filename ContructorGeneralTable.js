class TableLibrary {
    constructor(params) {
        this.divName = params.divName;
        this.titleTable = params.titleTable;
        this.apiUrl = `http://lment801.americas.ad.flextronics.com:88/WebAPIGeneral/api/dynamic?@procedureName=${params.storeProcedureName}&@kind=${params.kind}`;
    }

    // Método para simular datos
    async fetchData() {
        // Simulación de datos en lugar de una llamada API real
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = [
                    { id: 1, name: 'Pallet A', position: 'Warehouse 1' },
                    { id: 2, name: 'Pallet B', position: 'Warehouse 2' },
                    { id: 3, name: 'Pallet C', position: 'Warehouse 3' }
                ];
                resolve(data);
            }, 1000); // Simula una demora de 1 segundo
        });
    }

    createTable(data) {
        const container = document.getElementById(this.divName);
        if (!container) {
            console.error('Container element not found.');
            return;
        }

        // Crear el título de la tabla
        const title = document.createElement('h2');
        title.textContent = this.titleTable;
        container.appendChild(title);

        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';

        if (data && data.length > 0) {
            const headers = Object.keys(data[0]);
            const thead = document.createElement('thead');
            const tr = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                th.style.border = '1px solid #ddd';
                th.style.padding = '8px';
                tr.appendChild(th);
            });
            thead.appendChild(tr);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            data.forEach(row => {
                const tr = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = row[header];
                    td.style.border = '1px solid #ddd';
                    td.style.padding = '8px';
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
        } else {
            const noDataMessage = document.createElement('p');
            noDataMessage.textContent = 'No data available';
            container.appendChild(noDataMessage);
            return;
        }

        container.appendChild(table);
    }

    async renderTable() {
        const data = await this.fetchData();
        this.createTable(data);
    }
}
