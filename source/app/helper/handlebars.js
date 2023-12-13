const Handlebars = require('handlebars');
module.exports = {
    sum: (...a) => [...a].reduce((total, num) => total + (+num || 0)),
    sortable: (field, sort) => {
        // const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: "b",
            asc: "d",
            desc: "e",
        };
        const types = {
            default: "desc",
            asc: "desc",
            desc: "asc",
        };

        const type = types[sort.type];
        const icon = icons[sort.type];

        const href= Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
        const output = `<a href=${href}>
              <div data-icon="${icon}" class="icon"></div>
          </a>`;
        return new Handlebars.SafeString(output);
    }
}