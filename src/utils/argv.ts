/**
 * helper to get object from argv.
 * https://stackoverflow.com/a/4351548/9483405
 */
export default ((): any => {
    const arg = {};
    process.argv.slice(2).map( (element) => {
        const matches = element.match( '--([a-zA-Z0-9]+)=(.*)');
        if ( matches ){
            // @ts-ignore
            arg[matches[1]] = matches[2]
                .replace(/^['"]/, '').replace(/['"]$/, '');
        }
    });
    return arg;
})();
