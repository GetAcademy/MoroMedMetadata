class SuperForm {
    constructor(metadata, data, params) {
        this.id = params.id;
        this.isEditable = params.edit;
        this.metadata = metadata;
        this.data = data.filter(row => row.id === this.id)[0];
        console.log(this.data);
        this.showFormatters = {
            date: d => d ? d.toLocaleDateString('nb-no')  : '',
            string: s => s
        };
        this.editFormatters = {
            date: d => d ? d.toISOString().substr(0, 10) : '',
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
            const formatterName = column.dataType || 'string';
            html += `<tr><td>${column.text}</td>`;
            let value = this.data[column.dataPropertyName];
            if (this.isEditable) {
                value = this.editFormatters[formatterName](value);
                html += `<td><input type="${this.types[column.dataType || 'string']}"
                                   value="${value}"/>`;
            } else {
                value = this.showFormatters[formatterName](value);
                html += `<td>${value}</td>`;

            }
            html += `</tr>`;
        }
        html += `</table>`;
        return html;
    }
}