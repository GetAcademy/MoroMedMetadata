class SuperForm {
    constructor(metadata, data, id) {
        this.id = id;
        this.metadata = metadata;
        this.data = data.filter(row => row.id === id)[0];
        this.formatters = {
            date: d => d ? formatDate(d) : '',
            string: s => s
        };
        this.types = {
            string: 'text',
            date: 'date'
        }
    }

    getHtml() {
        let html = `<h3>${this.metadata.text}</h3>
            <table>`;
        for (let column of this.metadata.columns) {
            const formatter = this.formatters[column.dataType || 'string'];
            const value = formatter(this.data[column.dataPropertyName]);
            html += `<tr>
                        <td>${column.text}</td>
                        <td><input type="${this.types[column.dataType || 'string']}"
                                   value="${value}"/>
                     </tr>`;
        }
        html += `</table>`;
        return html;
    }
}