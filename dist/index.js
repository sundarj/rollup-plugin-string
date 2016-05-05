'use strict';

function string() {
	var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	if (!Array.isArray(opts.extensions)) {
		throw Error('rollup-plugin-string: `extensions` option should be an array');
	}

	return {
		transform: function transform(code, id) {
			var filter = function filter(ext) {
				return id.indexOf(ext) === id.length - ext.length;
			};

			if (!opts.extensions.filter(filter).length) {
				return null;
			}

			return {
				code: 'export default ' + ('`' + code + '`'),
				map: { mappings: '' }
			};
		}
	};
}

module.exports = string;