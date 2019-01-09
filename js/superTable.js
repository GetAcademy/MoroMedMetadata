class SuperTable {
    constructor(metadata, data) {
        this.metadata = metadata;
        this.data = data;
        this.formatters = {
            date: d => d ? d.toLocaleDateString('nb-no') : '',
            string: s => s
        };
    }

    getHtml() {
        let html = `<h3>${this.metadata.text}</h3>
            <table>
                <tr>`;
        for (let column of this.metadata.columns) {
            html += `<th>${column.text}</th>`;
        }
        html += `</tr>`;

        for (let row of this.data) {
            html += `<tr>`;
            for (let column of this.metadata.columns) {
                const formatter = this.formatters[column.dataType || 'string'];
                const value = row[column.dataPropertyName];
                html += `<td>${formatter ? formatter(value) : value}</td>`;
            }
            for (let operation of this.metadata.operations) {
                let onclick = operation.goToPage
                    ? `goToPage('${operation.goToPage}', ${row.id})`
                    : `doAction('${operation.doAction}', ${row.id})`;

                html += `<td><button onclick="${onclick}">${operation.text}</button></td>`;
            }
            html += `</tr>`;
        }
        html += `</table>`;
        return html;
    }
}